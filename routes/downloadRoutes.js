const router = require('express').Router()
const { User, Log } = require('../models')
const PDFDocument = require('pdfkit');
const fs = require('fs');
const blobStream = require('blob-stream');

function formatLogs(logs) {
    let formatLogs = []
    logs.forEach(elem => {
        formatLogs.push([
            `Date: ${elem.date}          Location: ${elem.location}`,
            [
                `Time spent holding wall: ${elem.holdWall}`,
                `BLS Count: ${elem.bls}`,
                `ALS Count: ${elem.als}`,
                `Cancel Count: ${elem.cancels}`,
                `Total Count: ${elem.bls + elem.als + elem.cancels}`,
                ''
            ]
        ])
    })
    return formatLogs
}
function sumAllCalls(log) {
    let count = { bls: 0, holdWall: 0, als: 0, cancels: 0 }
    log.forEach(elem => {
        count.bls += elem.bls
        count.als += elem.als
        count.holdWall += elem.holdWall
        count.cancels += elem.cancels
    })
    return count
}
router.get('/pdf/:uid', (req, res) => {

    // Create a document
    const doc = new PDFDocument();
    User.findOne({ where: { id: req.params.uid } })
        .then(user => {
            const userData = JSON.parse(JSON.stringify(user))
            fs.writeFileSync(`${__dirname}/../public/userGenPDFs/${userData.username}.pdf`)
            Log.findAll({ where: { userId: req.params.uid } })
                .then(logs => {
                    const log = JSON.parse(JSON.stringify(logs))
                    let ws = fs.createWriteStream(`${__dirname}/public/userGenPDFs/${userData.username}.pdf`)
                    doc.pipe(ws)
                    doc.info.Title=`${userData.username}.pdf`
                    doc.moveDown()
                    doc.image(`${__dirname}/public/images/customLogoOne.png`, 50, 15, { width: 500, align: 'right' })
                    const formattedLogs = formatLogs(log)
                    const count = sumAllCalls(log)
                    doc.moveDown()
                    doc.fontSize(20)
                    doc.text(`This PDF contains all the user data for ${userData.firstName} ${userData.lastName}`)
                    doc.text('')
                    doc.moveDown()
                    doc.fontSize(16)
                    doc.text(`Email: ${userData.email}`)
                    doc.text(`Employer: ${userData.employer}`)
                    doc.text(`Username: ${userData.username}`)
                    doc.text(`Total logs submitted: ${log.length}`)
                    doc.text(`Total Calls: ${count.als + count.bls + count.cancels}`)
                    doc.text(`Total ALS Count: ${count.als}`)
                    doc.text(`Total BLS Count: ${count.bls}`)
                    doc.text(`Total Cancels: ${count.cancels}`)
                    doc.text(`Total Minutes Holding the Wall: ${count.holdWall}`)
                    doc.text('')
                    doc.moveDown()
                    doc.fontSize(12)
                    doc.list(formattedLogs, { listType: 'bulletRadius', align: 'left' })
                    doc.end()
                    ws.on('finish', () => {
                        // fs.readFile(`${__dirname}/../userGenPDFs/${userData.username}.pdf`, function (err, data) {
                        //     res.contentType('application/pdf');
                        //     res.setHeader('Content-disposition', `inline; filename="${userData.username}"`);
                        //     res.send(data);
                        // })
                        res.render('displayPDF', {userData, filepath: `${__dirname}/public/userGenPDFs/${userData.username}.pdf`})
                    })
                    //res.sendfile(`${__dirname}/../userGenPDFs/${userData.username}.pdf`)
                })
        })
})

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage

module.exports = router
var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())


const materialRoutes = require('./routers/materials.js')
app.use(materialRoutes);

const hsRoutes = require('./routers/hs.js')
app.use(hsRoutes);

const tradeAgreementRoutes = require('./routers/tradeAgreement.js')
app.use(tradeAgreementRoutes);

const materialTypeRoutes = require('./routers/materialTypes.js')
app.use(materialTypeRoutes);

const unitOfMesuresRoutes = require('./routers/unitOfMesures')
app.use(unitOfMesuresRoutes);

const supplierRoutes = require('./routers/supplier')
app.use(supplierRoutes);

const incotermsRoutes = require('./routers/incoterm')
app.use(incotermsRoutes);

const approvalMapRoutes = require('./routers/approvalMaps')
app.use(approvalMapRoutes);

const regApprovalRoutes = require('./routers/regulatoryApproval')
app.use(regApprovalRoutes);

const recepieMapRoutes = require('./routers/recepieMap')
app.use(recepieMapRoutes);

const taxMapRoutes = require('./routers/taxMap')
app.use(taxMapRoutes);

const blTypeRoutes = require('./routers/blType')
app.use(blTypeRoutes);

//const bTypeRoutes = require('./routers/bType')
//app.use(bTypeRoutes);

const stakeHolder = require('./routers/stakeHolder')
app.use(stakeHolder);

const paymentsTerm = require('./routers/paymentsTerm')
app.use(paymentsTerm);

app.use((error, req, res, next) => {
    console.error(error)
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).send();
  });
// set port
app.listen(8080, function() {
    //ToDo: use log file instead of console log
    console.log('Node app is running on port 3010');
});
module.exports = app;
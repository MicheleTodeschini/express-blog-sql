function notFound(req, res, next) {
    res.status(404).json({ messaggio: `L'endpoint che stai cercando di raggiungere non è esistente. Non riprovare perché non c'è` })
}

module.exports = notFound
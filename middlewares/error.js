function error(err, req, res, next) {
    res.status(500).json({ message: `Errore, riprova` })
}

module.exports = error
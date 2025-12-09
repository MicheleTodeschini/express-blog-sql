
const articoliRicette = require('../data/ArticoliRicette')
const connection = require('../database/connection')
const posts = require('../routers/posts')



const index = (req, res) => {
    // throw new Error("errore")

    const sql = 'SELECT * FROM posts'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results)

    })
    res.json(articoliRicette)

    filteredArticle = articoliRicette


    if (req.query.tags) {
        console.log('trovato ');
        filteredArticle = articoliRicette.filter(articolo => articolo.tags.includes(tags))

    }
    res.json(filteredArticle)
}

const show = (req, res) => {
    const id = Number(req.params.id)
    console.log(id);

    const sql = 'SELECT * FROM posts WHERE id = ?'
    const sqlIngredients = ''
    console.log(sql, id);

    connection.query(sql, [id], (err, response))

    const foundArticolo = articoliRicette.find(articolo => articolo.id === id)


    {/*    let foundArticolo = {}

    for (let i = 0; i < articoliRicette.length; i++) {
        if (articoliRicette[i].id === id) {
            foundArticolo = articoliRicette[i]

        }

    }*/}

    res.json(foundArticolo)
    console.log(foundArticolo);


}

const store = (req, res) => {
    const nuovoArticolo = {
        id: Date.now(),
        ...req.body
    }

    console.log(nuovoArticolo);


    articoliRicette.push(nuovoArticolo)

    res.json(articoliRicette)
}

const update = (req, res) => {
    const id = Number(req.params.id)
    const articoloData = {
        ...req.body
    }

    const foundPost = articoliRicette.find(post => post.id === id)

    if (!foundPost) {
        return res.status(404).json({
            error: true,
            message: 'not found'
        })
    }

    foundPost.title = articoloData.title
    foundPost.content = articoloData.content
    foundPost.tags = articoloData.tags

    res.json(foundPost)

}

const modify = (req, res) => {
    res.send(`modify the post with id: ${req.params.id}`)
}

const destroy = (req, res) => {

    // The Number can prevent an sql injections but it's not enough
    const id = Number(req.params.id)
    /*
        const sql = `DELETE FROM posts WHERE id = ${id}`
        console.log(sql, id);
    
    
        connection.query(sql, [id], (err, results) => {
            if (err) return res.status(500).json({ error: true, message: err.messgae })
            console.log(results);
            res.sendStatus(204)
    
        })
            */

    connection.query(`DELETE FROM POSTS WHERE id = ?`, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete the post' })
    })

    res.send(`You want to delete the pizza with id: ${id}`)

    /*
    console.log(id);

    const foundArticolo = articoliRicette.find(articolo => articolo.id === id)

    articoliRicette.splice(articoliRicette.indexOf(foundArticolo), 1)
    console.log(articoliRicette);

    res.sendStatus(204)
    */
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
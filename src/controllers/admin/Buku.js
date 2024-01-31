import {
    Buku
} from "../../models/M_buku.js";

const indexBuku = async (req, res) => {
    const allBuku = await Buku.findAll();

    var data = {
        layout: 'admin/base',
        halaman: 'Daftar Buku',
        buku: allBuku
    };
    res.render('admin/buku/view', data);
}

const createBuku = (req, res) => {
    var data = {
        layout: 'admin/base',
        halaman: 'Create Buku',
    };
    res.render('admin/buku/create', data);
}

const updateBuku = async (req, res) => {
    const id = req.params.id;

    const getBuku = await Buku.findOne({
        where: {
            id: id
        }
    })

    var data = {
        layout: 'admin/base',
        halaman: 'Update Buku',
        buku: getBuku
    };
    res.render('admin/buku/update', data);
}

const saveBuku = async (req, res) => {
    const {
        id,
        number_book,
        title,
        author,
        year,
        type,
    } = req.body;

    let data = {};

    if (id === undefined) {
        data = {
            number_book: number_book,
            title: title,
            author: author,
            year: year,
            type: type,
            status: true
        };
        await Buku.create(data);
    } else {
        data = {
            number_book: number_book,
            title: title,
            author: author,
            year: year,
            type: type,
            status: true
        };
        await Buku.update(data, {
            where: {
                id: id
            }
        })
    }

    res.status(200).json({
        status: "Success",
        message: "Success",
        title: "Success",
        text: "Success",
        icon: "success",
        button: "Close",
    });
}

const destroyBuku = (req, res) => {
    const {
        id,
    } = req.body;

    Buku.destroy({
        where: {
            id: id
        }
    });

    res.status(200).json({
        status: "Success",
        message: "Success",
        title: "Success",
        text: "Success",
        icon: "success",
        button: "Close",
    })
}

export {
    indexBuku,
    createBuku,
    updateBuku,
    saveBuku,
    destroyBuku
}
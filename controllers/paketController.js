const addPaket = (req, res) => {
    const { namaPaket, harga } = req.body;

    if (!namaPaket || !harga) {
        return res.status(400).json({ message: 'Bad Request' });
    }

    // Simulasi penambahan paket
    const newPaket = { id: Date.now(), namaPaket, harga, gambar: req.file ? req.file.path : null };
    res.status(201).json({ message: 'Paket successfully added', data: newPaket });
};

module.exports = { addPaket };

const isAdmin = (req, res, next) => {
    // Simulasi pengecekan admin
    const isAdmin = true;

    if (!isAdmin) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    next();
};

module.exports = isAdmin;

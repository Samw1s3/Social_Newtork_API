const router = require('express');
const userRoutes = require('/api/userRoutes');

router.use(userRoutes);
module.exports = router;
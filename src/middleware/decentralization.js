const RoleRepository = require('../repositories/role.repository');

isAdmin = async (req, res, next) => {
    const role = await RoleRepository.GetNameRoleByStaffId(req.user.id);
    console.log("role",role.nameRole);

    if (role.nameRole !== 'ADMIN'){
        res.status(401).send({
            status: 401,
            error: 'Unauthorized to access this resource',
        });
    }

    console.log('Admin Authorized');

    next();
};

isSaleStaff = async (req, res, next) => {
    const role = await RoleRepository.GetNameRoleByStaffId(req.user.id);
    console.log("role",role.nameRole);

    if (role.nameRole !== 'SALE'){
        res.status(401).send({
            status: 401,
            error: 'Unauthorized to access this resource',
        });
    }

    console.log('SaleStaff Authorized');

    next();
};

isLogictisStaff = async (req, res, next) => {
    const role = await RoleRepository.GetNameRoleByStaffId(req.user.id);
    console.log("role",role.nameRole);

    if (role.nameRole !== 'LOGISTICS'){
        res.status(401).send({
            status: 401,
            error: 'Unauthorized to access this resource',
        });
    }

    console.log('LogictisStaff Authorized');

    next();
};

module.exports = {
    isAdmin,
    isSaleStaff,
    isLogictisStaff
};
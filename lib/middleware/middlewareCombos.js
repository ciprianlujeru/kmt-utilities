module.exports = {
    defaultRoute: [
        require('./verifySession').getUserId,
        require('./getLicenceList'),
        require('./redirectDefaultLicence')
    ],
    mainRoute: [
        require('./verifySession').getUserId,
        require('./getLicenceId'),
        require('./checkLicenceStatus').isActive,
        require('./getAuthToken'),
        require('./isAdminSession').isAdminUser
    ]
};

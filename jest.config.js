module.exports = {
    transform: { '^.+\\.jsx?$': 'babel-jest' },
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {'\\.(css|scss)$': 'identity-obj-proxy'},
};

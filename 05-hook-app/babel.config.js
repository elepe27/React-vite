// Primero debemos correr npm install --save-dev @babel/preset-typescript
// npm i -D ts-node

module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { esmodules:true } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
    ]
};
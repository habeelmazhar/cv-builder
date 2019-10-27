const fs = require('fs');
const path = require('path');

const themesPath = path.join(__dirname, '../views/themes');

let Themes = {};
fs.readdirSync(themesPath).forEach(file => {
    let themeName = file.split('.')[0];
    Themes[themeName] = file;
});
console.log('Themes: ', Themes);


exports.getAllThemes = function (req, res, next) {
   let themeNames = Object.keys(Themes);
    res.json({
        status: 'success',
        msg: 'Themes',
        data: themeNames
    });
}

exports.getTheme = function (req, res, next) {
    let name = req.params.name;
    res.sendFile(path.join(__dirname, '../views/themes/' + Themes[name]));
}
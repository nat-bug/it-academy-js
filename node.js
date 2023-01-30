const fs = require('fs-extra')

//fs.mkdirpSync('NewFolder1')

//fs.moveSync('NewFolder2/NewFile2.txt', 'NewFolder1/NewFile1.txt')

//перемещае файл из одной папки в другую
//let fs = require('fs');
// fs.moveSync('./NewFolder2/NewFile2.txt', './NewFolder1/NewFile1.txt', err => {
//    if(err) throw err; // не удалось переместить файл
//    console.log('Файл успешно перемещён');
// });
//создает папку
//fs.ensureDirSync('NewFolder3')
// создает папку и копирует
//fs.copySync('./NewFolder1/NewFile1.txt', './NewFolder3/NewFile3.txt')
//fs.removeSync('./NewFolder3')
//fs.removeSync('./NewFolder1/NewFile.txt')
//fs.removeSync('./NewFolder1/NewFile1.txt')
//fs.removeSync('./NewFolde3/NewFile3.txt')
//fs.removeSync('./NewFolder1')
//fs.removeSync('./NewFolder2')
fs.removeSync('./NewFolde3')
console.log('Папка удалена')
//importing the dependency
const ExcelJS = require('exceljs');


async function writeExcel(searchText, replaceTet, change, filePath){
   
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet("Sheet1");
    const output = await readFromExcel(worksheet, searchText);
    const cell = worksheet.getCell(output.row, output.column+change.colChange);
    cell.value = replaceTet;
    await workbook.xlsx.writeFile(filePath);

}

async function readFromExcel(worksheet, searchText){
            //creating an obj "output" and setting value of row and col to "-1"
        let output = {
            row:-1, 
            column:-1
        };  

        worksheet.eachRow( (row, rowNumber) =>
    {
        row.eachCell( (cell, colNumber) =>{
            // to print all the values
            console.log(cell.value);
            //to print the co-ordinates
            if(cell.value === searchText){
                console.log(rowNumber);
                console.log(colNumber);
            }
            //to capture the co-ordinate and setting its value 
            if(cell.value === searchText){
                output.row = rowNumber;
                output.column = colNumber;
            }

        })
        
    })
    return output;
}

writeExcel("V Ragavendran","175000", {rowChange:0, colChange:2},"D:/Jeld-Wen/OnlineTrainings/PlayWright/ReadFromExcel.xlsx");


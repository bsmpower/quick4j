package com.eliteams.quick4j.core.util;

import org.apache.poi.ss.usermodel.Cell;

import java.util.regex.Pattern;

public class Inspect {
    public String getstr(Cell cell){
        String strvalue = getCellFormatValue(cell);
        if(strvalue==null) return null;
        if(strvalue.equals("")) return null;
        return strvalue;
    }

    public String gety(Cell cell){
        String year = getCellFormatValue(cell);
        if(year==null||year.equals("")) return null;
        if(cell.getCellType()==Cell.CELL_TYPE_STRING) return "formaterror";
        if(year.length()!=4) return "formaterror";
        return year;
    }

    public String getm(Cell cell){
        String month = getCellFormatValue(cell);
        if(month==null||month.equals("")) return null;
        if(cell.getCellType()==Cell.CELL_TYPE_STRING) return "formaterror";
        int intmonth = Integer.parseInt(month);
        if(intmonth>12||intmonth<1) return "formaterror";
        return month;
    }

    public String getd(Cell cell){
        String day = getCellFormatValue(cell);
        if(day==null||day.equals("")) return null;
        if(cell.getCellType()==Cell.CELL_TYPE_STRING) return "formaterror";
        int intday = Integer.parseInt(day);
        if(intday>31||intday<1) return "formaterror";
        return day;
    }

    public String doubleval(Cell cell){
        String db = getdoubleFormatValue(cell);
        if(db==null||db.equals("")) return null;
        if(cell.getCellType()==Cell.CELL_TYPE_STRING) return "formaterror";
        return db;
    }


    public String getCellFormatValue(Cell cell){
        String cellValue = "";
        if (cell == null) {
            return null;
        }
        switch (cell.getCellType()) {
            case Cell.CELL_TYPE_NUMERIC: {
                // 获取单元格的值作为数字 getNumericCellValue()
                cellValue = String.valueOf((int) cell.getNumericCellValue());
                break;
            }
            case Cell.CELL_TYPE_STRING: {
                cellValue = cell.getRichStringCellValue().getString();
                break;
            }
        }
        return cellValue;
    }

    public String getdoubleFormatValue(Cell cell){
        String cellValue = "";
        if (cell == null) {
            return null;
        }
        switch (cell.getCellType()) {
            case Cell.CELL_TYPE_NUMERIC: {
                cellValue = String.valueOf((float) cell.getNumericCellValue());
                break;
            }
            case Cell.CELL_TYPE_STRING: {
                cellValue = cell.getRichStringCellValue().getString();
                break;
            }
        }
        return cellValue;
    }


//    private boolean isInteger(String str) {
//        if (null == str || "".equals(str)) {
//            return false;
//        }
//        Pattern pattern = Pattern.compile("^[-\\+]?[\\d]*$");
//        return pattern.matcher(str).matches();
//    }
}

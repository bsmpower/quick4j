package com.eliteams.quick4j.core.util;

//获取图片的路径
public class PathUtil {
    private static String separator = System.getProperty("file.separator");
    public static String getImgBasePath(){
        String os = System.getProperty("os.name");
        String basePath = "";
        if(os.toLowerCase().startsWith("win")){
            basePath = "F:/imageTest";
        }else{
            basePath = "/home/imageTest";
        }
        basePath = basePath.replace("/", separator);
        return basePath;
    }

    public static String getTestPicturePath(int id){
        String imagePath = "/images/item/test/"+id+"/";
        return imagePath.replace("/",separator);
    }
}

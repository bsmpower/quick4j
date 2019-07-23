package com.eliteams.quick4j.core.util;

import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class ImageUtil2 {
    private static String basePath = Thread.currentThread().getContextClassLoader().getResource("").getPath();
    private static final SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
    private static final Random r = new Random();

    /**
     * 图片操作
     * @param request
     * @param pictureFile
     * @return
     * @throws IOException
     */
    public static String upload(HttpServletRequest request, MultipartFile pictureFile)throws IOException{
        //录入数据库中的地址
        String imgPath = null;

        //上传图片
        if(pictureFile!=null&&!pictureFile.isEmpty()){
//            String realFileName = getRandomFileName();
            String realFileName =  pictureFile.getOriginalFilename();
//            String extension = FilenameUtils.getExtension(pictureFile.getOriginalFilename());
            //设置图片上传路径
            String url = request.getSession().getServletContext().getRealPath("/pictureMessage");
            //检查文件夹是否存在
            isFolderExists(url);

//            pictureFile.transferTo(new File(url + "/" + realFileName + "." + extension));
//            imgPath = "upload/" + realFileName + "." + extension;
            pictureFile.transferTo(new File(url + "/" + realFileName));
            imgPath = "pictureMessage/" + realFileName;

        }
        return imgPath;
    }

    public static boolean isFolderExists(String strFolder){
        File file = new File(strFolder);

        if(!file.exists()){
            if(file.mkdir()){
                return true;
            }else{
                return false;
            }
        }

//        System.out.println("文件上传路径："+strFolder);
        return  true;
    }
//    //文件原始地址
//    private static String basePath = Thread.currentThread().getContextClassLoader().getResource("").getPath();
//    private static final SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
//    private static final Random r = new Random();
//    //图片处理
//    public static String upload(String fileName, String targetAddr){
//        String realFileName = getRandomFileName();
//        String extension = getFileExtension(fileName);
//        makeDirPath(targetAddr);
//        String relativeAddr = targetAddr+realFileName+extension;
//        File dest = new File(PathUtil.getImgBasePath()+relativeAddr);
//        return relativeAddr;
//    }
//
//    /**
//     * 创建目标路径所涉及到的目录
//     * @param targetAddr
//     */
//    private static void makeDirPath(String targetAddr){
//        String realFileParentPath = PathUtil.getImgBasePath()+targetAddr;
//        File dirPath = new File(realFileParentPath);
//        if(!dirPath.exists()){
//            dirPath.mkdirs();
//        }
//    }
//
//    /**
//     * 获取文件后缀
//     * @param fileName
//     * @return
//     */
    private static String getFileExtension(String fileName){
        //先找到.,以.作为切割，分割文件名
        return fileName.substring(fileName.lastIndexOf("."));
    }
//
    public static String getRandomFileName(){
        int rannum = r.nextInt(89999)+10000;
        String nowTimeStr = sDateFormat.format(new Date());
        return nowTimeStr+rannum;
    }
//
//    /**
//     * storePath是文件的路径还是目录的路径，如果storePath是文件路径则删除该文件
//     * 如果storePath是目录路径则删除目录下所有的文件
//     * @param storePath
//     */
//    public static void deleteFileOrPath(String storePath){
//        File fileOrPath = new File(PathUtil.getImgBasePath() + storePath);
//        if (fileOrPath.exists()) {
//            if (fileOrPath.isDirectory()) {
//                File files[] = fileOrPath.listFiles();
//                for (int i = 0; i < files.length; i++) {
//                    files[i].delete();
//                }
//            }
//            fileOrPath.delete();
//        }
//    }
//
//    public static void main(String[] args) throws IOException {
//        String rrl = upload("little.jpg","/testP/");
//        System.out.println(rrl);
//    }

}

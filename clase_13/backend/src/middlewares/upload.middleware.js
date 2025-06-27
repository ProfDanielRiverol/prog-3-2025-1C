import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, "public/images/");
  },
  filename: (req, file, next) => {
    const ext = path.extname(file.originalname);
    const uniqueFilename = `${Date.now()}-${ext}`;
    next(null, uniqueFilename);
  },
});

const fileFilter = (req, file, next) => {
  const allowedType = /jpeg|jpg|png|webp/;
  const ext = allowedType.test(path.extname(file.originalname));
  const mimetype = allowedType.test(file.mimetype);

  if (ext && mimetype) {
    next(null, true);
  } else {
    next(new Error("extensión invalida jpeg | jpg | png | webp"));
  }
};

export default multer({
  storage,
  limits: { fieldSize: 5 * 1024 * 1024 },
  fileFilter,
});

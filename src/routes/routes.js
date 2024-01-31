import express from "express";
import {
    home,
    about,
    contact
} from "../controllers/pages.js";
import {
    signin,
    signup,
    signout
} from "../controllers/auth.js";
import {
    indexDashboard
} from "../controllers/admin/Dashboard.js";
import {
    createBuku,
    destroyBuku,
    indexBuku,
    saveBuku,
    updateBuku
} from "../controllers/admin/Buku.js";

const router = express.Router();

// begin:: landing page
router.get("/", home);
router.get("/about", about);
router.get("/contact", contact);
// end:: landing page

// begin:: auth
router.get("/signin", signin);
router.get("/signup", signup);
router.get("/signout", signout);
// end:: auth

// begin:: admin

// begin:: dashboard
router.get("/admin", indexDashboard);
// end:: dashboard

// begin:: buku
router.get("/admin/buku", indexBuku);
router.get("/admin/buku/create", createBuku);
router.get("/admin/buku/update/:id", updateBuku);
router.post("/admin/buku/save", saveBuku);
router.post("/admin/buku/destroy", destroyBuku);
// end:: buku

// end:: admin

export default router;
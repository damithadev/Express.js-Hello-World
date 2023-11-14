import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello api 1")
})

export default router;
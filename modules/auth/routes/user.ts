import * as express from 'express';
import { login, registro } from '../controllers/authController';
import { verifyToken } from './../middlewares/authJwt';

const router = express.Router();

router.post("/registro", async (req, res) => {
    try {
      let newRegistro = await registro(req.body);
    } catch (err) {
      throw err;
    }
  });

  router.post("/login", async (req, res) => {
    try {
      let token = await login(req.body);

      res.send({
        mensaje: 'Login Exitoso',
        token: token
      })
    } catch (err) {
      throw err;
    }
  });

export = router;
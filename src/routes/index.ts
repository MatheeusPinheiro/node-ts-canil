import {Request, Response, Router} from 'express';
import * as pageController from '../controllers/pageController';
import * as SearchControle from '../controllers/searchController';


const router = Router();

router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/cats', pageController.cats);
router.get('/fishes', pageController.fishes);
router.get('/search', SearchControle.search);

export default router;
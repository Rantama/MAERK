'use strict';

import {Router} from 'express';
import * as controller from './employee.control';
import * as auth from '../../auth/auth.service';


var router = Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.put('/:id', controller.update);

module.exports = router;

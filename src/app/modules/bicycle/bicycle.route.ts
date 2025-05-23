import express from 'express';
import { BicycleControllers } from './bicycle.controller';
import validateRequest from '../../middlewares/validateRequest';
import { bicycleValidation } from './bicycle.validation';

const router = express.Router();

// will call controller func
router.post(
  '/create-Bicycle',
  validateRequest(bicycleValidation.createBicycleSchemaValidation),
  BicycleControllers.createBicycle,
);

router.get('/', BicycleControllers.getAllBicycles);

router.get('/:id', BicycleControllers.getSingleBicycle);

router.patch(
  '/:id',
  validateRequest(bicycleValidation.updateBicycleSchemaValidation),
  BicycleControllers.updateBicycle,
);

router.delete('/:id', BicycleControllers.deleteBicycle);
export const BicycleRoutes = router;

import { Request, Response } from 'express';
import { BicycleServices } from './bicycle.service';
import catchAsync from '../../utils/catchAsync';

import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

// create bicycle
const createBicycle = catchAsync(async (req: Request, res: Response) => {
  const result = await BicycleServices.createBicycleIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bicycle is created successfully!',
    data: result,
  });
});

// get all bicycle | search and filter bicycle
const getAllBicycles = catchAsync(async (req: Request, res: Response) => {
  const {
    searchTerm,
    brand,
    category,
    minPrice,
    maxPrice,
    inStock,
    model,
    page,
    limit,
    sortBy,
    sortOrder,
  } = req.query;

  const result = await BicycleServices.getAllBicyclesFromDB(
    searchTerm as string,
    brand as string,
    category as string,
    minPrice ? parseFloat(minPrice as string) : undefined,
    maxPrice ? parseFloat(maxPrice as string) : undefined,
    inStock as boolean | undefined,
    model as string,
    page ? parseInt(page as string) : undefined,
    limit ? parseInt(limit as string) : undefined,
    sortBy as string,
    sortOrder as 'asc' | 'desc' | undefined,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bicycle retrieved successfully!',
    data: result,
  });
});

// get a single bicycle
const getSingleBicycle = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BicycleServices.getSingleBicycleFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bicycle retrieved successfully!',
    data: result,
  });
});

// update a single bicycle
const updateBicycle = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;
  const result = await BicycleServices.updateBicycle(id, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bicycle updated successfully!',
    data: result,
  });
});

// delete a bicycle
const deleteBicycle = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BicycleServices.deleteBicycle(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bicycle Deleted successfully!',
    data: result,
  });
});

export const BicycleControllers = {
  createBicycle,
  getAllBicycles,
  getSingleBicycle,
  updateBicycle,
  deleteBicycle,
};

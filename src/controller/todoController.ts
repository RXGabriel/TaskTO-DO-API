import {sequelize} from '../data/mysql'
import { Request, Response } from 'express';
import {Todo } from '../model/Todo';

export const all = async (req: Request, res: Response) => {
  const list = await Todo.findAll()
  res.json({list})
}

export const add = async (req: Request, res: Response) => {
    
}

export const update = async (req: Request, res: Response) => {
    
}

export const remove = async (req: Request, res: Response) => {
    
}
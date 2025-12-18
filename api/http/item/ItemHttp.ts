import { IItemHttp } from './IItemHttp';
import axiosInstance from '../../axios-instance/axios-instance';

export class ItemHttp implements IItemHttp {
  async getItems(): Promise<any[]> {
    const response = await axiosInstance.get('/items');
    return response.data;
  }
}
import { APIService } from '../src/services/APIService';

test('Type FFFLFFRBBHFFFFF and return location should be f11, and covrage will be 2.88%',()=>{
    const carService = new APIService();
    const result = carService.excuteOrders("FFFLFFRBBHFFFFF","Testcar");
    expect(result.location).toEqual('F11');
    expect(result.coverage).toEqual('2.88%');
});
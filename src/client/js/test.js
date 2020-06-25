  
import { handleSubmit} from './handler';

test("Testing the submit function", () => {
    expect(handleSubmit).toBeDefined()
});

describe('HTTP req', () => {
    it('Perform POST and GET', async () => {
        const data = await expect (Promise.resolve('res'));
        expect(data).toEqual(expect.anything());
    })
});
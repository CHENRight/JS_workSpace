const multiplication = require("../multiplicationTable.js");

it ('should_return_table_when_start_small_than_end_and_start_bigger_zero_and_end_small_than_1000', () => {
    //given
    const start = 2;
    const end = 4;
    //when
    var table = multiplication.createMulTable(start,end);
    //then
    expect(table).toBe("2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16\n");
});

it('should_return_null_when_start_bigger_than_end',() => {
    //given
    const start = 3;
    const end = 1;

    //when
    var table = multiplication.createMulTable(start,end);

    //then
    expect(table).toBe(null);
});
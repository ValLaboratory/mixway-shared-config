// このファイル内でtsconfigの設定やeslintのルールをテストするためのコードです。

[1, 2, 3].map((x) => x * 2);

const random = Math.floor(Math.random() * 3) + 1;

switch (random) {
    // @ts-expect-error: for ts-check
    case 1:
        console.log("one");

        // eslint-disable-next-line no-fallthrough
    case 2:
        console.log("two");
        break;
}

// eslint-disable-next-line max-params
function add(a: number, b: number, c: number, d: number) {
    const sum = a + b + c + d;
    return {
        // eslint-disable-next-line object-shorthand
        sum: sum,
    };
}

add(1, 2, 3, 4);

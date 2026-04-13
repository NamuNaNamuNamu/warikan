/*
<使い方>
animateValue({
    start: 1000,                            // 変更前の数値
    end: 1500,                              // 変更後の数値
    duration: 500,                          // 何 ms かけて変化させるか
    onUpdate: (value) => {
        console.log(value);                 // 値の変更が起こるたびに行う処理
    }

    isInteger: true                         // optional。デフォルトは true。アニメーションを整数にするか、小数も含むか。
});

*/

export function animateNumber({ start, end, duration, onUpdate, isInteger = true }) {
    const startTime = performance.now();

    const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = (t) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOut(progress);

        let currentValue = start + (end - start) * easedProgress;
        currentValue = isInteger ? Math.floor(currentValue) : currentValue;

        onUpdate(currentValue);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}
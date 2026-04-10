// ceilTo(424, {unit: 100}) => 500
// ceilTo(424, {unit: 200}) => 600
// ceilTo(424, {unit: 50}) => 450

export function ceilTo (num, { unit }) {
    return Math.ceil(num / unit) * unit;
}
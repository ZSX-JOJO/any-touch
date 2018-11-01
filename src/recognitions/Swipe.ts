import Base from './Base';
export default class SwipeRecognizer extends Base {
    public name: string;

    constructor(options: any) {
        super(options);
        this.name = 'swipe'
    };

    recognize(computed: any, callback: (paylod: any) => {}): void {
        if (this.test(computed)) {
            callback({ ...computed, type: this.name });

            callback({ ...computed, type: this.name + computed.lastDirection });

        }
    };

    test(computed: any): boolean {
        const { inputStatus, lastDirection, direction, lastVelocity, maxPointerLength, distance } = computed;
        return 1 === maxPointerLength &&
            10 < distance &&
            'end' === inputStatus &&
            'none' !== lastDirection &&
            'none' !== direction &&
            0.3 < lastVelocity;
    };
};
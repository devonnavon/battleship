import { Ship } from '../Ship';

it('Create an instance of Ship', () => {
	const ship = Ship(3);
	expect(ship).toBeDefined();
});

it('1. Length gets passed correctly', () => {
	const ship = Ship(3);
	expect(ship.length()).toEqual(3);
});

it('2. Length gets passed correctly', () => {
	const ship = Ship(5);
	expect(ship.length()).toEqual(5);
});

it('Check default state', () => {
	const ship = Ship(3);
	expect(ship.isSunk()).toEqual(false);
	expect(ship.isHit()).toEqual(false);
	expect(ship.isSunk()).toEqual(false);
});

it('1. Hit a ship', () => {
	const ship = Ship(3);
	expect(ship.isHit()).toEqual(false);
	ship.hit(2);
	expect(ship.isHit()).toEqual(true);
});

it("2. Hit a ship twice, don't sink", () => {
	const ship = Ship(3);
	expect(ship.isHit()).toEqual(false);
	ship.hit(2);
	ship.hit(1);
	expect(ship.isSunk()).toEqual(false);
});

it('3. Sink a ship', () => {
	const ship = Ship(2);
	expect(ship.isHit()).toEqual(false);
	ship.hit(1);
	ship.hit(0);
	expect(ship.isSunk()).toEqual(true);
});

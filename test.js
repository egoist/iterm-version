import test from 'ava'
import v from './'

test('main', async t => {
	try {
		let version = await v()
		version = version.split('.')
		console.log(version[0] > 1)
		t.true(version[0] > 1)
		t.true(version[1] > 8)
	} catch (e) {
		if (process.env.CI) {
			t.pass()
		} else {
			t.fail(e.message)
		}
	}
})

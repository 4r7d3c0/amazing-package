import amazingPackage from '../src'

(async () => {
  const res = await amazingPackage({
    text: 'example',
  })
  console.log(res)
})()
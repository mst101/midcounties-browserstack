var assert = require('assert')

describe('MidCounties app', () => {
  it('logs in with valid credentials', async () => {
    const cookiesButton = $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button[1]'
    )
    await cookiesButton.click()

    // const selector =
    //   'new UiSelector().text("Log in").className("android.widget.Button")'
    // const loginButton = await $(`android=${selector}`)
    // await loginButton.click()

    const loginButton = await driver.$(
      '//android.widget.Button[@content-desc="Log in"]'
    )
    await loginButton.click()

    const emailField = await driver.$(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText'
    )
    await emailField.setValue('parmandkinni@gmail.com')

    const passwordField = await driver.$(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText'
    )
    await passwordField.setValue('Password99')

    const submitButton = await driver.$(
      '//android.widget.Button[@content-desc="Log In"]'
    )
    await submitButton.click()

    const dontMissOut = await driver.$(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[1]'
    )
    await expect(dontMissOut).toHaveTextContaining("Don't miss out!")

    const nextButton = await driver.$(
      '//android.widget.Button[@content-desc="Next"]'
    )
    await nextButton.click()

    // console.log('### START WEBVIEW CONTEXT ###')

    let contexts = await driver.execute('mobile:getContexts')
    console.log('##################')
    console.log(contexts)
    console.log('##################')
    // const webview = contexts[0].webviewName
    // const webview = 'WEBVIEW_com.cxloyalty.midcountiescoop'

    // console.log('######')
    // console.log(webview)
    // console.log('######')

    // await driver.switchContext(webview)

    // let newcontexts = await driver.execute('mobile:getContexts')
    // console.log(newcontexts)

    // const pages = newcontexts[0].pages
    // console.log(pages[0])
    // console.log('----------------')
    // console.log(pages[1])

    // driver.switchToFrame('5486BDFEC5B91EB44CA2C7734A4A986F')

    // console.log(await browser.getPageSource())
    // console.log('===============================')

    // const header = await driver.$(
    //   '#root > div > div > div > section:nth-child(1) > div.Home_flexLeftRight__sMlxF.Home_row__3lwNx > h2'
    // )
    // await expect(header).toHaveTextContaining('Great value just for you')
  })
})

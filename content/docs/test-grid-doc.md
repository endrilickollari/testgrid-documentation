---
title: Test Grid Documentation (how to properly grab elements manually)
slug: /docs
---

   ## Notion [link](https://www.notion.so/komodoplatform/Implement-Test-Grid-automations-ae4b6b28350b4e76ab500b01e5fdd513?pvs=4) for more details on implementation.
   ## 1. Go to Application
   - Open [TestGrid](https://dedicated3.testgrid.io/) Website.
   - Login with the correct credential.
   - Click **Application**.
   - It will take you to the dashboard.

   ## 2. Choose Application

   ![Choose Application Image](/images/choose_application.png)
   - Choose one of the applications as listed in the image above or for how to __add new application__ [check here](https://www.testgrid.io/docs/test-case-versioning-management).

   ## 3. Write test cases
   
   - After choosing the app you want to work on, this page will appear:
     
     ![Write Test Cases](/images/write_test_cases_button.png)
   - Click on __TG-TestCase Writer__.
   - After that wait for a few moments for this page to appear:
     
     ![Test Case Writer](/images/test_case_writer.png)
   - Here are a few explanations about sections in this page:

     ![Test Case Writer Explanatory](/images/test_case_writer_explanatory.png)
      - Version: basically is the app version that we want to test, in this case 0.6.1 AtomicDex.
      - Modules: Every module that we want to test, here are listed AtomicDex modules, and the test cases are based on AtomicDex test plan.
      - Test cases and test functions are everything user has to focus on.
      - For more information please vist Test Grid [documentation](https://www.testgrid.io/docs/document/category/documentation/automation-testing)
   
   ## 4. Generate Test Cases

   - To start generating test cases, first have to expand __Test Cases__:
     
     ![Generate Test Cases](/images/test_case_generator.png)
   - After that you will find a list of test cases.
   - Click on __Add Test Case With TestCase Generator__:
     
     ![Test Case Generator Button](/images/test_case_generator_button.png)
   - At that moment please click on user profile at top right in the page, and click __TG-DeviceCloud__
     
     ![Device Cloud](/images/device_cloud.png)
   - After that a new tab will be open, and you will find a list of devices:

     ![Device Cloud View](/images/device_cloud_view.png)
   - The device will be ready to generate test cases at the moment when the button it will have the description: __Available (TC Generator)__ and then tap __Connect__.

     ![Connect To Device](/images/connect_to_device.png)
   - A new browser tab will be opened, and it will look like this: 
     
     ![Application Installed](/images/application_in_device.png)
   - Also, this page it will be visible at the tab we initiated the test case generator, so go back there, and you will find this view:

     ![Test Case Generator App](/images/test_case_generator_app_view.png)
   - In this case just select the page for example: __CreateOrRestoreWallet__ and tap select.
   - Then you will be ready to write test cases.

   ## 5. How to catch elements in Test Grid

   - First of all everything that the user do in the device cloud, interacts with application, for example the user tap __CREATE WALLET__
     we except this view it will be visible:

     ![Create Wallet DC](/images/create_wallet_DC.png)
   - After this we have to go back at test case generator windows, tap __Refresh Screenshot__ and this will be visible:

     ![Create Wallet TCG](/images/create_wallet_TCG.png)
   - For more tutorials and how to there are a lot of [videos](https://www.youtube.com/@testgridno-codetestautomat7285/playlists) from test grid trainers who explain better those steps.
   - For catching elements better there is a better way than Test Grid automatic catchers:
     
     - Go back to Device Cloud where application is up and running.
     - Tap this icon, it is for inspection element:
       
       ![DC Inspector](/images/device_cloud_inspector.png)
     - For example, we want to tap __CREATE WALLET__ element, but first we have to catch it as an element.
     - Surf through the elements till the __CREATE WALLET__ element will be highlighted:
     
       ![CW highlighted](/images/create_wallet_DC_highlighted.png)
     - After that tap __Details__:
     
       ![CW details](/images/create_wallet_DC_details.png)
     - There you will find all the details about the __CREATE WALLET__ element.
     - Then go back to Test case generator page, create a step to tap to an element, click select element, and configure it to choose the element manually:
     
       ![CW TCG element grabber](/images/test_case_generator_element_grabber.png)
     - At the __By Full XPath__ write down: `//android.widget.ImageView@content-desc[contains(., "CREATE WALLET")]` and save, do not forget to name the element.
     - Basically that is the safest way to do the catch of elements in Test Grid, you can use it in whatever way you want, but be aware that there are cases that after running the tests it will not be known as the element that was grabbed automatically by TestGrid.

   - Another way is to tap second tab:
     
     ![Second way](/images/second_way_1.png)
     - Tap on Select element from list
     - A new view will appear with all the elements able to read:
       
       ![Elements to read](/images/elements_to_read.png)
     - After this there will be all the elements to read, with different attributes, from Xpath to cont-desc.

   # 6. Focus problems in WebDex native build

   - In Android native builds in WebDex there might be cases where input forms might not be focused and user cannot type, for example:
     
     - If you want to type seed phase in this case here, because the element is not focused, you have to write a custom script than call it in the test case:
       
       ![WebDex](/images/webdex_input_not_focused.png)
     
     - If that's the case the custom script would have been like this:
        
       ```java
       driver.findElement(By.xpath("//xPath of element")).click();
       driver.getKeyboard().sendKeys("seed phase of wallet");
       ```
     
     - Basically this script make possible that keyboard of phone will be visible and will be typed directly from keyboard, and the input will be focusable.
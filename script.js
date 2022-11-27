function contentSlider() {
    const contentSlide = document.querySelector('.content__slide')
    const slideImg = [...document.querySelectorAll('.content__slide-img')]

    function nextSlide () {
        contentSlide.appendChild(slideImg[0])
    }
    nextSlide()
}
contentSlider()
setInterval(contentSlider , 2000)

function initAdmin() {
    let test = JSON.parse(localStorage.getItem('SignUp'))

    // localStorage.removeItem('SignUp')
    if(test == null) {
        let Account = []
        let signUpAccount = {}

        signUpAccount.name = 'Phạm Tấn Đạt'
        signUpAccount.email = 'phamtandat655@gmail.com'
        signUpAccount.phone = '0394047655'
        signUpAccount.address = 'BC , TPHCM'
        signUpAccount.password = '12345'

        Account.push(signUpAccount)
        localStorage.setItem('SignUp' , JSON.stringify(Account))
    }

    let testRespon = JSON.parse(localStorage.getItem('reloadResponsive'))
    if(testRespon == null) {
        // khởi tạo responsive khi resize
        if(window.innerWidth > 1024) {
            localStorage.setItem('reloadResponsive' , false)
        }
        if(window.innerWidth < 1024) {
            localStorage.setItem('reloadResponsive' , true)
        }  
    }
}
initAdmin()

function productItem() {
    const products = [{
        image : 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-600x600.jpg',
        name : 'Điện thoại iPhone 14 Pro Max 128GB',
        price : '33.590.000₫',
        desc : 'Cuối cùng thì chiếc iPhone 14 Pro Max cũng đã chính thức lộ diện tại sự kiện ra mắt thường niên vào ngày 08/09 đến từ nhà Apple, kết thúc bao lời đồn đoán bằng một bộ thông số cực kỳ ấn tượng cùng vẻ ngoài đẹp mắt sang trọng. Từ ngày 14/10/2022 người dùng đã có thể mua sắm các sản phẩm iPhone 14 series với đầy đủ phiên bản tại Thế Giới Di Động.',
        screen : 'OLED, 6.7 inch, Super Retina XDR, 120Hz',
        chip : 'Apple A16 Bionic 6 nhân',
        ram : '6 GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/10/637957717267975494_samsung-galaxy-z-fold4-xanh-1.jpg',
        name : 'Samsung Galaxy Z Fold 4 5G 512GB',
        price : '42.490.000₫',
        desc : 'Với Samsung Galaxy Z Fold4, smartphone màn hình gập đã trở nên thân thiện, tiện dụng và bền bỉ hơn rất nhiều. Những cải tiến thiết thực trong từng khía cạnh giúp sản phẩm biến hóa linh hoạt hơn và đem lại những trải nghiệm không thể tìm thấy ở đâu khác.',
        screen : 'Dynamic AMOLED 2X, Màn Hình Chính: 7.6 inch, Màn Hình Phụ: 6.2 inch, 120Hz',
        chip : 'Snapdragon 8+ Gen 1',
        ram : '12 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/260546/oppo-reno8-pro-thumb-xanh-1-600x600.jpg',
        name : 'Điện thoại OPPO Reno8 Pro 5G',
        price : '18.990.000₫',
        desc : 'OPPO Reno8 Pro 5G ra mắt với sự đột phá về phần camera khi đây là thiết bị đầu tiên thuộc dòng Reno được tích hợp NPU MariSilicon X, được xem là NPU cao cấp nhất đến từ OPPO (2022) có khả năng xử lý hình ảnh đỉnh cao. Kèm với đó là một con chip mạnh mẽ đến từ nhà MediaTek giúp bạn có thể cân được mọi tựa game đang hiện hành.',
        screen : 'AMOLED6.7"Full HD+',
        chip : 'MediaTek Dimensity 8100 Max 8 nhân',
        ram : '12 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg',
        name : 'Điện thoại iPhone 14 Pro 128GB',
        price : '30.590.000₫',
        desc : 'Tại sự kiện ra mắt sản phẩm thường niên diễn ra vào tháng 9/2022, Apple đã trình làng iPhone 14 Pro với những cải tiến về thiết kế màn hình, hiệu năng, sẵn sàng cùng bạn chinh phục mọi thử thách. Giờ đây người dùng đã có thể mua sắm những sản phẩm iPhone 14 series từ ngày 14/10/2022 tại Thế Giới Di Động với đầy đủ các phiên bản.',
        screen : 'OLED, 6.1 inch, Super Retina XDR, 120 Hz',
        chip : 'Apple A16 Bionic 6 nhân',
        ram : '6 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/249944/oppo-a55-4g-thumb-new-600x600.jpg',
        name : 'Điện thoại OPPO A55',
        price : '4.190.000₫',
        desc : 'OPPO cho ra mắt OPPO A55 4G chiếc smartphone giá rẻ tầm trung có thiết kế đẹp mắt, cấu hình khá ổn, cụm camera chất lượng và dung lượng pin ấn tượng, mang đến một lựa chọn trải nghiệm thú vị vừa túi tiền cho người tiêu dùng.' ,
        screen : 'IPS LCD6.5"HD+',
        chip : 'MediaTek Helio G35',
        ram : '4 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-600x600.jpg',
        name : 'Điện thoại iPhone 13 Pro Max 128GB',
        price : '28.990.000₫',
        desc : 'Điện thoại iPhone 13 Pro Max 128 GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120 Hz mượt mà, cảm biến camera có kích thước lớn hơn, cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử thách.',
        screen : 'OLED, 6.7 inch, Super Retina XDR, 120Hz',
        chip : 'Apple A15 Bionic',
        ram : '6 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-den-thumb-600x600.jpg',
        name : 'Điện thoại OPPO Find X5 Pro 5G ',
        price : '30.490.000₫',
        desc : 'OPPO Find X5 Pro 5G có lẽ là cái tên sáng giá được xướng tên trong danh sách điện thoại có thiết kế ấn tượng trong năm 2022. Máy được hãng cho ra mắt với một diện mạo độc lạ chưa từng có, cùng với đó là những nâng cấp về chất lượng ở camera nhờ sự hợp tác với nhà sản xuất máy ảnh Hasselblad.',
        screen : 'AMOLED6.7"Quad HD+ (2K+)',
        chip : 'Snapdragon 8 Gen 1',
        ram : '12 GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/11/637643199945549459_samsung-galaxy-z-fold3-bac-1.jpg',
        name : 'Samsung Galaxy Z Fold 3 5G 512GB',
        price : '32.990.000₫',
        desc : 'Khi bạn mở ra màn hình gập lớn tới 7,6 inch trên Samsung Galaxy Z Fold3 5G là lúc bạn đã mở ra một tương lai hoàn toàn mới cho thế giới smartphone, nơi công nghệ vượt qua mọi giới hạn, cho trải nghiệm hoàn hảo nhất ở một thiết bị di động nhỏ gọn.',
        screen : 'Dynamic AMOLED 2X, Màn Hình Chính 7.6 inch, Màn Hình Phụ 6.2 inch, 120 Hz',
        chip : 'Snapdragon 888',
        ram : '12GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-graphite-600x600.jpg',
        name : 'Điện thoại iPhone 13 Pro 128GB',
        price : '25.990.000₫',
        desc : 'Mỗi lần ra mắt phiên bản mới là mỗi lần iPhone chiếm sóng trên khắp các mặt trận và lần này cái tên khiến vô số người "sục sôi" là iPhone 13 Pro, chiếc điện thoại thông minh vẫn giữ nguyên thiết kế cao cấp, cụm 3 camera được nâng cấp, cấu hình mạnh mẽ cùng thời lượng pin lớn ấn tượng. ',
        screen : 'OLED, 6.1 inch, Super Retina XDR, 120Hz',
        chip : 'Apple A15 Bionic',
        ram : '6 GB',
    } ,
    {
        //pin sạc dự phòng
        image : 'https://cdn.tgdd.vn/Products/Images/57/296863/pin-sac-du-phong-10000mah-type-c-pd-qc3-0-hydrus-pb299s-vang-011122-022958-600x600.jpeg',
        name : 'Sạc dự phòng 10000mAh Type C PD QC3.0 Hydrus PB299S Vàng',
        price : '450.000₫',
        desc : 'Pin sạc dự phòng 10000mAh Type C PD QC3.0 Hydrus PB299S Vàng sở hữu thiết kế đơn giản, màu sắc nổi bật, khối lượng gọn nhẹ, sạc pin tiện lợi và nhanh chóng mọi lúc mọi nơi.',
    } ,
    {
        //pin sạc dự phòng
        image : 'https://cdn.tgdd.vn/Products/Images/57/266165/pin-sac-10000mah-type-c-pd-qc30-20w-hydrus-pb299s-thumb-1-600x600.jpeg',
        name : 'Pin sạc dự phòng 10000mAh Type C PD QC3.0 Hydrus PB299S',
        price : '600.000₫',
        desc : 'Pin sạc dự phòng 10000mAh Type C PD QC3.0 Hydrus PB299S có kiểu dáng nhỏ gọn, màu sắc nổi bật, in hình hổ đáng yêu.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-5g-black-600x600.jpg',
        name : 'Điện thoại OPPO Reno6 5G',
        price : '10.890.000₫',
        desc : 'Sau khi ra mắt OPPO Reno5 chưa lâu thì OPPO lại cho ra mẫu smartphone mới mang tên OPPO Reno6 với hàng loạt cải tiến mới về ngoại hình bên ngoài lẫn hiệu năng bên trong, mang đến trải nghiệm vượt bật cho người dùng.',
        screen : 'AMOLED6.43"Full HD+',
        chip : 'MediaTek Dimensity 900 5G',
        ram : '8 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/245545/iPhone-14-plus-thumb-den-600x600.jpg',
        name : 'Điện thoại iPhone 14 Plus 128GB',
        price : '26.790.000₫',
        desc : 'iPhone 14 Plus thu hút mọi ánh nhìn trong sự kiện Far Out diễn ra ngày 8/9 nhờ có vẻ ngoài cao cấp, trang bị bộ xử lý mạnh mẽ, cụm camera kép đặc trưng cho khả năng chụp ảnh cực nét cùng màn hình chất lượng cao cho bạn tận hưởng cảm giác sử dụng smartphone tuyệt vời hơn. Từ ngày 14/10/2022 người dùng đã có thể mua sắm các sản phẩm iPhone 14 series đầy đủ phiên bản tại Thế Giới Di Động.',
        screen : 'OLED, 6.7 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A15 Bionic',
        ram : '6 GB',
    },
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/9/637800453115752334_samsung-galaxy-s22-ultra-den-1.jpg',
        name : 'Samsung Galaxy S22 Ultra 5G 512GB',
        price : '30.490.000₫',
        desc : 'Samsung Galaxy S22 Ultra 5G là siêu phẩm kế thừa tinh hoa Galaxy Note cùng đột phá Galaxy S, tạo nên sức mạnh vô song đỉnh cao. Điện thoại đã thiết lập chuẩn mực mới cho dòng smartphone cao cấp từ sức mạnh hàng đầu Snapdragon 8 Gen 1, camera “mắt thần bóng đêm”, khả năng zoom 100x, bút S-Pen tích hợp và thời gian sử dụng cả ngày dài. Đây là siêu phẩm tuyệt vời nhất mà Samsung từng mang đến.',
        screen : 'Dynamic AMOLED 2X, 6.8 inch, 120Hz',
        chip : 'Snapdragon 8 Gen 1',
        ram : '12GB',
    },
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-thumb-tim-1-600x600.jpg',
        name : 'Điện thoại iPhone 14 128GB',
        price : '23.790.000₫',
        desc : 'Sau bao khoảng thời gian dài chờ đợi thì vào ngày 08/09 chiếc điện thoại iPhone 14 cũng đã chính thức được lộ diện, với hàng loạt thông số kỹ thuật ấn tượng từ camera cho đến hiệu năng cực khủng. Từ ngày 14/10/2022 tại Thế Giới Di Động cũng đã chính thức mở bán tất cả các phiên bản iPhone 14 series để người dùng có thể sớm ngày được trải nghiệm.',
        screen : 'OLED, 6.1 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A15 Bionic',
        ram : '6 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-1-600x600.jpg',
        name : 'Điện thoại OPPO Reno7 Z 5G ',
        price : '9.590.000₫',
        desc : 'OPPO đã trình làng mẫu Reno7 Z 5G với thiết kế OPPO Glow độc quyền, camera mang hiệu ứng như máy DSLR chuyên nghiệp cùng viền sáng kép, máy có một cấu hình mạnh mẽ và đạt chứng nhận xếp hạng A về độ mượt.',
        screen : 'AMOLED6.43"Full HD+',
        chip : 'Snapdragon 695 5G',
        ram : '8 GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/13/637986875399707328_samsung-galaxy-z-flip4-flex-mode-collection-1.jpg',
        name : 'Samsung Galaxy Z Flip4 5G Flex Mode Collection',
        price : '22.990.000₫',
        desc : 'Linh hoạt biến hóa, không ngừng sáng tạo, Samsung Galaxy Z Flip4 mang đến những xu hướng công nghệ hiện đại, đậm chất thời trang cho người dùng sành điệu. Nay điện thoại còn thêm phần cuốn hút với phiên bản giới hạn Samsung Galaxy Z Flip4 Flex Mode Collection – một sự kết hợp của Samsung và GIA STUDIOS cho phiên bản màu Pink Gold hoặc Blue.',
        screen : 'Dynamic AMOLED, Màn Hình Chính: 6.7 inch, Màn Hình Phụ: 1.9 inch, 120Hz',
        chip : 'Snapdragon 8+ Gen 1',
        ram : '8GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-pink-2-600x600.jpg',
        name : 'Điện thoại iPhone 13 128GB',
        price : '20.990.000₫',
        desc : 'Trong khi sức hút đến từ bộ 4 phiên bản iPhone 12 vẫn chưa nguội đi, thì hãng điện thoại Apple đã mang đến cho người dùng một siêu phẩm mới iPhone 13 với nhiều cải tiến thú vị sẽ mang lại những trải nghiệm hấp dẫn nhất cho người dùng.',
        screen : 'OLED, 6.1 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A15 Bionic',
        ram : '4 GB',
    } ,
    {
        //cáp sạc
        image : 'https://cdn.tgdd.vn/Products/Images/58/232636/cap-type-c-2m-belkin-cab001-ava-1-600x600.jpg',
        name : 'Cáp Type C 2m Belkin CAB001',
        price : '230.000₫',
        desc : 'Sử dụng tiện lợi với thiết kế gọn nhẹ, dây dài 2 m. Chất liệu nhựa phủ bên ngoài dây giúp bảo vệ linh kiện bên trong, độ bền cao, chống rối dây hiệu quả.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/274381/oppo-a96-den-thumb-1-600x600.jpg',
        name : 'Điện thoại OPPO A96',
        price : '6.690.000₫',
        desc : 'OPPO A96 là cái tên được nhắc đến khá nhiều trên các diễn đàn công nghệ hiện nay, nhờ sở hữu một ngoại hình hết sức bắt mắt cùng hàng loạt các thông số ấn tượng trong phân khúc giá như hiệu năng cao, camera chụp ảnh sắc nét',
        screen : 'IPS LCD6.59"Full HD+',
        chip : 'Snapdragon 680',
        ram : '8 GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/10/637800486734376188_samsung-galaxy-s22-plus-den-1.jpg',
        name : 'Samsung Galaxy S22 Plus 5G 256GB ',
        price : '22.490.000₫',
        desc : 'Tận hưởng những công nghệ hàng đầu nhà Samsung, Galaxy S22 Plus 5G sẽ cho bạn trải nghiệm đỉnh cao từ thiết kế thời thượng, hiệu năng mạnh mẽ Snapdragon 8 Gen 1 và hệ thống camera đêm chuyên nghiệp nhất từ trước đến nay.',
        screen : 'Dynamic AMOLED 2X, 6.6 inch, 120Hz',
        chip : 'Snapdragon 8 Gen 1',
        ram : '8GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/236780/iphone-13-mini-blue-2-600x600.jpg',
        name : 'Điện thoại iPhone 13 mini 128GB',
        price : '17.490.000₫',
        desc : 'iPhone 13 mini được Apple ra mắt với hàng loạt nâng cấp về cấu hình và các tính năng hữu ích, lại có thiết kế vừa vặn. Chiếc điện thoại này hứa hẹn là một thiết bị hoàn hảo hướng tới những khách hàng thích sự nhỏ gọn nhưng vẫn giữ được sự mạnh mẽ bên trong. ',
        screen : 'OLED, 5.4 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A15 Bionic',
        ram : '4 GB',
    } ,
    {
        //adapter sạc
        image : 'https://cdn.tgdd.vn/Products/Images/9499/284275/adapter-sac-dual-type-c-35w-apple-mnwp3-trang-thumb-1-600x600.jpeg',
        name : 'Adapter Sạc Dual Type C 35W Apple MNWP3 Trắng',
        price : '1.520.000₫',
        desc : 'Adapter Sạc Dual Type C 35W Apple MNWP3 Trắng sở hữu gam màu trắng tươi sáng, sang trọng, dễ dàng mang theo khi di chuyển.',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/10/637957685772850661_samsung-galaxy-z-flip4-vang-1.jpg',
        name : 'Samsung Galaxy Z Flip4 5G 256GB',
        price : '22.990.000₫',
        desc : 'Nhỏ gọn và tinh tế, Galaxy Z Flip4 là chiếc smartphone sinh ra dành cho các tín đồ thời trang. Cơ chế gập duyên dáng, bộ màu sắc nhẹ nhàng và loạt chức năng quay chụp sẽ làm say lòng những người yêu cái đẹp.',
        screen : 'Dynamic AMOLED, Màn Hình Chính: 6.7 inch, Màn Hình Phụ: 1.9 inch, 120Hz',
        chip : 'Snapdragon 8+ Gen 1',
        ram : '8GB',
    } ,
    {
        //cáp sạc
        image : 'https://cdn.tgdd.vn/Products/Images/58/259283/cap-type-c-lightning-1m-apple-mm0a3-trang-thumb-600x600.jpeg',
        name : 'Cáp Type C - Lightning 1m Apple MM0A3 Trắng',
        price : '530.000₫',
        desc : 'Cáp Type C - Lightning 1m Apple MM0A3 Trắng sở hữu thiết kế đơn giản, độ dài 1 m cùng khả năng sạc nhanh lên đến 87 W chính là sự lựa chọn tuyệt vời cho các iFans chân chính.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-den-new-2-600x600.jpg',
        name : 'Điện thoại iPhone 12 64GB',
        price : '16.990.000₫',
        desc : 'Trong những tháng cuối năm 2020, Apple đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone 12 series mới với hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12 64GB.',
        screen : 'OLED, 6.1 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A14 Bionic',
        ram : '4 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/292780/oppo-a77s-den-thumb-1-2-600x600.jpg',
        name : 'Điện thoại OPPO A77s',
        price : '6.290.000₫',
        desc : 'OPPO vừa cho ra mắt mẫu điện thoại tầm trung mới với tên gọi OPPO A77s, máy sở hữu màn hình lớn, thiết kế đẹp mắt, hiệu năng ổn định cùng hàng loạt thông số nổi bật khác',
        screen : 'IPS LCD6.56"HD+',
        chip : 'Snapdragon 680 4G',
        ram : '8 GB',
    } ,
      
    {
        //adapter sạc
        image : 'https://cdn.tgdd.vn/Products/Images/9499/245841/type-c-pd-25w-belkin-wca004-ava-600x600.jpg',
        name : 'Adapter Sạc Type C PD 25W Belkin WCA004',
        price : '490.000₫',
        desc : 'Tiết kiệm thời gian với chuẩn sạc nhanh Power Delivery, công suất tối đa 25 W',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/11/637643156295663392_samsung-galaxy-z-flip3-5g-black-1.jpg',
        name : 'Samsung Galaxy Z Flip3 5G 256GB ',
        price : '18.490.000₫',
        desc : 'Một biểu tượng thời trang, một kiệt tác của thế giới công nghệ mà ai cũng phải kinh ngạc khi nhìn thấy Samsung Galaxy Z Flip3 5G và cách mà bạn sử dụng siêu phẩm smartphone này, nơi công nghệ điện thoại màn hình gập đã mang đến những điều không tưởng.',
        screen : 'Dynamic AMOLED, Màn Hình Chính: 6.7 inch, Màn Hình Phụ: 1.9 inch, 120Hz',
        chip : 'Snapdragon 888',
        ram : '8GB',
    },
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/225380/iphone-12-mini-do-4-600x600.jpg',
        name : 'Điện thoại iPhone 12 mini 64GB',
        price : '13.490.000₫',
        desc : 'Điện thoại iPhone 12 mini 64 GB tuy là phiên bản thấp nhất trong bộ 4 iPhone 12 series, nhưng vẫn sở hữu những ưu điểm vượt trội về kích thước nhỏ gọn, tiện lợi, hiệu năng đỉnh cao, tính năng sạc nhanh cùng bộ camera chất lượng cao.',
        screen : 'OLED, 5.4 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A14 Bionic',
        ram : '4 GB',
    },
    {
        //ốp lưng
        image : 'https://cdn.tgdd.vn/Products/Images/60/291359/op-lung-iphone-14-pro-max-nhua-cung-vien-deo-summer-cosano-thumb1-600x600.jpeg',
        name : 'Ốp lưng iPhone 14 Pro Max Nhựa cứng viền dẻo Summer COSANO',
        price : '150.000₫',
        desc : 'Thiết kế ốp lưng tinh tế, màu sắc thời thượng, nổi bật. Nhựa cứng chất lượng giúp bảo vệ tối đa phần mặt lưng của thiết bị.',
    },
    {
        //ốp lưng
        image : 'https://cdn.tgdd.vn/Products/Images/60/289841/op-lung-galaxy-a04s-nhua-deo-samsung-chinh-hang-den-trong-thumb-600x600.jpg',
        name : 'Ốp lưng Galaxy A04s Nhựa dẻo Samsung',
        price : '200.000₫',
        desc : 'Đường nét thiết kế đơn giản, màu đen trong đẹp mắt. Ốp lưng mỏng nhẹ với các đường bo góc mềm mại cho cảm giác cầm và sử dụng điện thoại thoải mái.',
    },
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/251703/oppo-a95-4g-bac-2-600x600.jpg',
        name : 'Điện thoại OPPO A95',
        price : '6.090.000₫',
        desc : 'Bên cạnh phiên bản 5G, OPPO còn bổ sung phiên bản OPPO A95 4G với giá thành phải chăng tập trung vào thiết kế năng động, sạc nhanh và hiệu năng đa nhiệm ấn tượng sẽ giúp cho cuộc sống của bạn thêm phần hấp dẫn, ngập tràn niềm vui',
        screen : 'AMOLED6.43"Full HD+',
        chip : 'Snapdragon 662',
        ram : '8 GB',
    } ,
     {
        image : 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg',
        name : 'Điện thoại iPhone 11 64GB',
        price : '12.490.000₫',
        desc : 'Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.',
        screen : 'IPS LCD, 6.1 inch, Liquid Retina, 60Hz',
        chip : 'Apple A13 Bionic',
        ram : '4 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/270360/OPPO-A76-%C4%91en-600x600.jpg',
        name : 'Điện thoại OPPO A76 ',
        price : '5.690.000₫',
        desc : 'OPPO A76 4G ra mắt với thiết kế trẻ trung, hiệu năng ổn định, màn hình 90 Hz mượt mà cùng viên pin trâu cho thời gian sử dụng lâu dài phù hợp cho mọi đối tượng người dùng',
        screen : 'IPS LCD6.56"HD+',
        chip : 'Snapdragon 680',
        ram : '6 GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/2/10/637800498484893706_samsung-galaxy-s22-den-12.jpg',
        name : 'Samsung Galaxy S22 5G 256GB ',
        price : '18.490.000₫',
        desc : 'Samsung Galaxy S22 5G là bước nhảy vọt trong công nghệ video trên thế hệ di động. Đồng thời, điện thoại cũng mở ra loạt cải tiến đột phá hàng đầu hiện nay từ màn hình vát phẳng “nịnh” mắt đến bộ xử lý 4nm tiên tiến đầu tiên trên thế hệ smartphone Samsung.',
        screen : 'Dynamic AMOLED 2X, 6.1 inch, 120Hz',
        chip : 'Snapdragon 8 Gen 1',
        ram : '8GB',
     } ,
    {
        //loa điện thoại
        image : 'https://cdn.tgdd.vn/Products/Images/2162/224541/loa-bluetooth-fenda-w5-plus-thumb2-600x600.jpg',
        name : 'Loa Bluetooth Fenda W5 Plus Xám',
        price : '270.000₫',
        desc : 'Thiết kế hiện đại, màu sắc bắt mắt, kết nối ổn định với các thiết bị khác trong phạm vi 10 m với kết nối Bluetooth 4.2.',
    } ,
    {
        //loa điện thoại
        image : 'https://cdn.tgdd.vn/Products/Images/2162/295489/loa-bluetooth-fenda-w5-plus-xanh-navy-241022-104112-600x600.jpg',
        name : 'Loa Bluetooth Fenda W5 Plus Xanh Navy',
        price : '360.000₫',
        desc : 'Loa Bluetooth Fenda W5 Plus Xanh Navy đem đến cho bạn một món phụ kiện cực kỳ nhỏ gọn, dễ dàng bỏ vào túi hoặc balo với âm thanh sống động, phù hợp cho nhu cầu giải trí cá nhân của bạn.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/244141/iphone-se-black-600x600.jpeg',
        name : 'Điện thoại iPhone SE 64GB',
        price : '11.490.000₫',
        desc : 'Như vậy là sau bao ngày chờ đợi thì iPhone SE 64GB (2022) cũng đã được giới thiệu tại sự kiện Apple Peek Performance. Thiết bị nổi bật với cấu hình mạnh mẽ, chạy chip hiện đại nhất của Apple hiện tại nhưng giá bán lại rất phải chăng.',
        screen : 'IPS LCD, 4.7 inch, Retina HD, 60Hz',
        chip : 'Apple A15 Bionic',
        ram : '4 GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/7/23/637941779749495327_samsung-galaxy-s22-bora-purple-1.jpg',
        name : 'Samsung Galaxy S22 Bora Purple',
        price : '15.990.000₫',
        desc : 'Bật nét kiêu kỳ, sẵn sàng trendy với phiên bản Samsung Galaxy S22 màu tím (Bora Purple), bạn sẽ trở nên thật thời thượng, ấn tượng và cá tính. Đồng hành đó là những công nghệ tốt nhất của Samsung từ hiệu năng Snapdragon 8 Gen 1, màn hình cao cấp cho đến hệ thống camera chuyên nghiệp.',
        screen : '6.1 inch, Dynamic AMOLED 2X,',
        chip : 'Snapdragon 8 Gen 1',
        ram : '8GB',
    } ,
    {
        // Tai nghe
        image : 'https://cdn.tgdd.vn/Products/Images/54/236016/bluetooth-airpods-2-apple-mv7n2-imei-ava-600x600.jpg',
        name : 'Tai nghe Bluetooth AirPods 2 Apple MV7N2 Trắng',
        price : '3.390.000₫',
        desc : 'Tai nghe Bluetooth AirPods 2 Apple MV7N2 - được mệnh danh là một chiếc AirPods huyền thoại quốc dân rất được lòng của các fan nhà táo.',
    } ,
    {
        //Tai nghe
        image : 'https://cdn.tgdd.vn/Products/Images/54/287888/tai-nghe-bluetooth-tws-oppo-enco-buds-2-ete41-trang-thumb2-600x600.jpeg',
        name : 'Tai nghe Bluetooth True Wireless OPPO ENCO Buds 2 ETE41',
        price : '1.290.000₫',
        desc : 'Thiết kế dạng tròn mới lạ, màu sắc thời thượng, sang trọng, hứa hẹn khả năng phát ra âm thanh chuẩn sống động và chi tiết tới từng âm bass, âm treble.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/282090/oppo-a57-xanh-thumb-1-600x600.jpg',
        name : 'Điện thoại OPPO A57 64GB ',
        price : '4.190.000₫',
        desc : 'Điện thoại OPPO A57 64GB vừa mới ra mắt đã tạo ấn tượng tích cực với cộng đồng yêu công nghệ. Sở hữu cho mình một thiết kế trẻ trung, hiệu năng mượt mà đáp ứng tốt nhu cầu cơ bản hằng ngày',
        screen : 'IPS LCD6.56"HD+',
        chip : 'MediaTek Helio G35',
        ram : '4 GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/4/637768938457620224_samsung-galaxy-s21-fe-xam-1.jpg',
        name : 'Samsung Galaxy S21 FE 5G 8GB - 256GB ',
        price : '12.990.00₫',
        desc : 'Tuyệt phẩm dành cho các fan của Galaxy Phone đã xuất hiện, Samsung Galaxy S21 FE 5G dồn nén hàng loạt công nghệ ấn tượng chiều lòng người dùng như màn hình 120Hz siêu mượt, hệ thống camera chụp ảnh chuẩn studio, kết nối 5G tốc độ cao cùng cấu hình đặc biệt ấn tượng. Tất cả gói gọn trong một thân máy nhẹ nhàng với màu sắc đẳng cấp và trẻ trung.',
        screen : 'Dynamic AMOLED 2X, 6.4 inch, 120Hz',
        chip : 'Exynos 2100',
        ram : '8GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/288401/oppo-a17-den-thumb-600x600.jpg',
        name : 'Điện thoại OPPO A17',
        price : '3.990.000₫',
        desc : 'Dường như OPPO đang ngày càng quan tâm đến trải nghiệm của người dùng, điều này được minh chứng qua nhiều dòng điện thoại của hãng trong đó có OPPO A17, máy sở hữu màn hình kích thước lớn, camera 50 MP đi cùng viên pin 5000 mAh với thời lượng dùng bền bỉ',
        screen : 'IPS LCD6.56"HD+',
        chip : 'MediaTek Helio G35',
        ram : '4 GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/7/637849355333862203_samsung-galaxy-a73-xam-1.jpg',
        name : 'Samsung Galaxy A73 5G',
        price : '10.990.000₫',
        desc : 'Trải nghiệm hệ thống camera 108MP đầu tiên trên thế hệ Galaxy A, hiệu năng cực mạnh Snapdragon 778G, màn hình 120Hz mượt mà và kết nối 5G siêu tốc, Samsung Galaxy A73 5G đã sẵn sàng đưa bạn vào thế giới công nghệ đỉnh cao, giúp cuộc sống tiện lợi hơn bao giờ.',
        screen : 'Super AMOLED, 6.7 inch, 120Hz',
        chip : 'Snapdragon 778G',
        ram : '8GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/236768/oppo-a54-4g-black-600x600.jpg',
        name : 'Điện thoại OPPO A54',
        price : '3.890.000₫',
        desc : 'OPPO tung ra mẫu điện thoại OPPO A54, được kế thừa thành công của OPPO A53, sở hữu bộ 3 camera AI thông minh, chấm camera selfie tinh tế nằm gọn trong màn hình tràn viền siêu rộng, vận hành mượt mà với hiệu năng ổn định và trở nên khác biệt so với các đối thủ trong tầm giá',
        screen : 'IPS LCD6.5"HD+',
        chip : 'MediaTek Helio P35',
        ram : '4 GB',
    },
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/3/21/637834656039848616_samsung-galaxy-a23-den-1.jpg',
        name : 'Samsung Galaxy A23',
        price : '5.590.000₫',
        desc : 'Cùng tận hưởng những tác vụ giải trí, kết nối và làm việc theo cách ấn tượng nhất trên không gian hình ảnh V-Cut TFT 6.6 inch mà Samsung Galaxy A23 sở hữu. Sản phẩm đem lại nhiều trải nghiệm đơn giản nhưng hiệu quả, ghi nhận năng lực chụp ảnh xuất sắc qua hệ thống bốn camera được tích hợp chống rung quang học OIS.',
        screen : 'TFT LCD, 6.6 inch, 90Hz',
        chip : 'Snapdragon 680',
        ram : '4GB',
    },
    
    ]

    const iphone = [{
        image : 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-600x600.jpg',
        name : 'Điện thoại iPhone 14 Pro Max 128GB',
        price : '33.590.000₫',
        desc : 'Cuối cùng thì chiếc iPhone 14 Pro Max cũng đã chính thức lộ diện tại sự kiện ra mắt thường niên vào ngày 08/09 đến từ nhà Apple, kết thúc bao lời đồn đoán bằng một bộ thông số cực kỳ ấn tượng cùng vẻ ngoài đẹp mắt sang trọng. Từ ngày 14/10/2022 người dùng đã có thể mua sắm các sản phẩm iPhone 14 series với đầy đủ phiên bản tại Thế Giới Di Động.',
        screen : 'OLED, 6.7 inch, Super Retina XDR, 120Hz',
        chip : 'Apple A16 Bionic 6 nhân',
        ram : '6 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg',
        name : 'Điện thoại iPhone 14 Pro 128GB',
        price : '30.590.000₫',
        desc : 'Tại sự kiện ra mắt sản phẩm thường niên diễn ra vào tháng 9/2022, Apple đã trình làng iPhone 14 Pro với những cải tiến về thiết kế màn hình, hiệu năng, sẵn sàng cùng bạn chinh phục mọi thử thách. Giờ đây người dùng đã có thể mua sắm những sản phẩm iPhone 14 series từ ngày 14/10/2022 tại Thế Giới Di Động với đầy đủ các phiên bản.',
        screen : 'OLED, 6.1 inch, Super Retina XDR, 120 Hz',
        chip : 'Apple A16 Bionic 6 nhân',
        ram : '6 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-600x600.jpg',
        name : 'Điện thoại iPhone 13 Pro Max 128GB',
        price : '28.990.000₫',
        desc : 'Điện thoại iPhone 13 Pro Max 128 GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120 Hz mượt mà, cảm biến camera có kích thước lớn hơn, cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử thách.',
        screen : 'OLED, 6.7 inch, Super Retina XDR, 120Hz',
        chip : 'Apple A15 Bionic',
        ram : '6 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-graphite-600x600.jpg',
        name : 'Điện thoại iPhone 13 Pro 128GB',
        price : '25.990.000₫',
        desc : 'Mỗi lần ra mắt phiên bản mới là mỗi lần iPhone chiếm sóng trên khắp các mặt trận và lần này cái tên khiến vô số người "sục sôi" là iPhone 13 Pro, chiếc điện thoại thông minh vẫn giữ nguyên thiết kế cao cấp, cụm 3 camera được nâng cấp, cấu hình mạnh mẽ cùng thời lượng pin lớn ấn tượng. ',
        screen : 'OLED, 6.1 inch, Super Retina XDR, 120Hz',
        chip : 'Apple A15 Bionic',
        ram : '6 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/245545/iPhone-14-plus-thumb-den-600x600.jpg',
        name : 'Điện thoại iPhone 14 Plus 128GB',
        price : '26.790.000₫',
        desc : 'iPhone 14 Plus thu hút mọi ánh nhìn trong sự kiện Far Out diễn ra ngày 8/9 nhờ có vẻ ngoài cao cấp, trang bị bộ xử lý mạnh mẽ, cụm camera kép đặc trưng cho khả năng chụp ảnh cực nét cùng màn hình chất lượng cao cho bạn tận hưởng cảm giác sử dụng smartphone tuyệt vời hơn. Từ ngày 14/10/2022 người dùng đã có thể mua sắm các sản phẩm iPhone 14 series đầy đủ phiên bản tại Thế Giới Di Động.',
        screen : 'OLED, 6.7 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A15 Bionic',
        ram : '6 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-thumb-tim-1-600x600.jpg',
        name : 'Điện thoại iPhone 14 128GB',
        price : '23.790.000₫',
        desc : 'Sau bao khoảng thời gian dài chờ đợi thì vào ngày 08/09 chiếc điện thoại iPhone 14 cũng đã chính thức được lộ diện, với hàng loạt thông số kỹ thuật ấn tượng từ camera cho đến hiệu năng cực khủng. Từ ngày 14/10/2022 tại Thế Giới Di Động cũng đã chính thức mở bán tất cả các phiên bản iPhone 14 series để người dùng có thể sớm ngày được trải nghiệm.',
        screen : 'OLED, 6.1 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A15 Bionic',
        ram : '6 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-pink-2-600x600.jpg',
        name : 'Điện thoại iPhone 13 128GB',
        price : '20.990.000₫',
        desc : 'Trong khi sức hút đến từ bộ 4 phiên bản iPhone 12 vẫn chưa nguội đi, thì hãng điện thoại Apple đã mang đến cho người dùng một siêu phẩm mới iPhone 13 với nhiều cải tiến thú vị sẽ mang lại những trải nghiệm hấp dẫn nhất cho người dùng.',
        screen : 'OLED, 6.1 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A15 Bionic',
        ram : '4 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/236780/iphone-13-mini-blue-2-600x600.jpg',
        name : 'Điện thoại iPhone 13 mini 128GB',
        price : '17.490.000₫',
        desc : 'iPhone 13 mini được Apple ra mắt với hàng loạt nâng cấp về cấu hình và các tính năng hữu ích, lại có thiết kế vừa vặn. Chiếc điện thoại này hứa hẹn là một thiết bị hoàn hảo hướng tới những khách hàng thích sự nhỏ gọn nhưng vẫn giữ được sự mạnh mẽ bên trong. ',
        screen : 'OLED, 5.4 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A15 Bionic',
        ram : '4 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-den-new-2-600x600.jpg',
        name : 'Điện thoại iPhone 12 64GB',
        price : '16.990.000₫',
        desc : 'Trong những tháng cuối năm 2020, Apple đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone 12 series mới với hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12 64GB.',
        screen : 'OLED, 6.1 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A14 Bionic',
        ram : '4 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/225380/iphone-12-mini-do-4-600x600.jpg',
        name : 'Điện thoại iPhone 12 mini 64GB',
        price : '13.490.000₫',
        desc : 'Điện thoại iPhone 12 mini 64 GB tuy là phiên bản thấp nhất trong bộ 4 iPhone 12 series, nhưng vẫn sở hữu những ưu điểm vượt trội về kích thước nhỏ gọn, tiện lợi, hiệu năng đỉnh cao, tính năng sạc nhanh cùng bộ camera chất lượng cao.',
        screen : 'OLED, 5.4 inch, Super Retina XDR, 60Hz',
        chip : 'Apple A14 Bionic',
        ram : '4 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg',
        name : 'Điện thoại iPhone 11 64GB',
        price : '12.490.000₫',
        desc : 'Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.',
        screen : 'IPS LCD, 6.1 inch, Liquid Retina, 60Hz',
        chip : 'Apple A13 Bionic',
        ram : '4 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/244141/iphone-se-black-600x600.jpeg',
        name : 'Điện thoại iPhone SE 64GB',
        price : '11.490.000₫',
        desc : 'Như vậy là sau bao ngày chờ đợi thì iPhone SE 64GB (2022) cũng đã được giới thiệu tại sự kiện Apple Peek Performance. Thiết bị nổi bật với cấu hình mạnh mẽ, chạy chip hiện đại nhất của Apple hiện tại nhưng giá bán lại rất phải chăng.',
        screen : 'IPS LCD, 4.7 inch, Retina HD, 60Hz',
        chip : 'Apple A15 Bionic',
        ram : '4 GB',
    }
    ]

    const oppo = [{
        image : 'https://cdn.tgdd.vn/Products/Images/42/260546/oppo-reno8-pro-thumb-xanh-1-600x600.jpg',
        name : 'Điện thoại OPPO Reno8 Pro 5G',
        price : '18.990.000₫',
        desc : 'OPPO Reno8 Pro 5G ra mắt với sự đột phá về phần camera khi đây là thiết bị đầu tiên thuộc dòng Reno được tích hợp NPU MariSilicon X, được xem là NPU cao cấp nhất đến từ OPPO (2022) có khả năng xử lý hình ảnh đỉnh cao. Kèm với đó là một con chip mạnh mẽ đến từ nhà MediaTek giúp bạn có thể cân được mọi tựa game đang hiện hành.',
        screen : 'AMOLED6.7"Full HD+',
        chip : 'MediaTek Dimensity 8100 Max 8 nhân',
        ram : '12 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/249944/oppo-a55-4g-thumb-new-600x600.jpg',
        name : 'Điện thoại OPPO A55',
        price : '4.190.000₫',
        desc : 'OPPO cho ra mắt OPPO A55 4G chiếc smartphone giá rẻ tầm trung có thiết kế đẹp mắt, cấu hình khá ổn, cụm camera chất lượng và dung lượng pin ấn tượng, mang đến một lựa chọn trải nghiệm thú vị vừa túi tiền cho người tiêu dùng.' ,
        screen : 'IPS LCD6.5"HD+',
        chip : 'MediaTek Helio G35',
        ram : '4 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-den-thumb-600x600.jpg',
        name : 'Điện thoại OPPO Find X5 Pro 5G ',
        price : '30.490.000₫',
        desc : 'OPPO Find X5 Pro 5G có lẽ là cái tên sáng giá được xướng tên trong danh sách điện thoại có thiết kế ấn tượng trong năm 2022. Máy được hãng cho ra mắt với một diện mạo độc lạ chưa từng có, cùng với đó là những nâng cấp về chất lượng ở camera nhờ sự hợp tác với nhà sản xuất máy ảnh Hasselblad.',
        screen : 'AMOLED6.7"Quad HD+ (2K+)',
        chip : 'Snapdragon 8 Gen 1',
        ram : '12 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-5g-black-600x600.jpg',
        name : 'Điện thoại OPPO Reno6 5G',
        price : '10.890.000₫',
        desc : 'Sau khi ra mắt OPPO Reno5 chưa lâu thì OPPO lại cho ra mẫu smartphone mới mang tên OPPO Reno6 với hàng loạt cải tiến mới về ngoại hình bên ngoài lẫn hiệu năng bên trong, mang đến trải nghiệm vượt bật cho người dùng.',
        screen : 'AMOLED6.43"Full HD+',
        chip : 'MediaTek Dimensity 900 5G',
        ram : '8 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-1-600x600.jpg',
        name : 'Điện thoại OPPO Reno7 Z 5G ',
        price : '9.590.000₫',
        desc : 'OPPO đã trình làng mẫu Reno7 Z 5G với thiết kế OPPO Glow độc quyền, camera mang hiệu ứng như máy DSLR chuyên nghiệp cùng viền sáng kép, máy có một cấu hình mạnh mẽ và đạt chứng nhận xếp hạng A về độ mượt.',
        screen : 'AMOLED6.43"Full HD+',
        chip : 'Snapdragon 695 5G',
        ram : '8 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/274381/oppo-a96-den-thumb-1-600x600.jpg',
        name : 'Điện thoại OPPO A96',
        price : '6.690.000₫',
        desc : 'OPPO A96 là cái tên được nhắc đến khá nhiều trên các diễn đàn công nghệ hiện nay, nhờ sở hữu một ngoại hình hết sức bắt mắt cùng hàng loạt các thông số ấn tượng trong phân khúc giá như hiệu năng cao, camera chụp ảnh sắc nét',
        screen : 'IPS LCD6.59"Full HD+',
        chip : 'Snapdragon 680',
        ram : '8 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/292780/oppo-a77s-den-thumb-1-2-600x600.jpg',
        name : 'Điện thoại OPPO A77s',
        price : '6.290.000₫',
        desc : 'OPPO vừa cho ra mắt mẫu điện thoại tầm trung mới với tên gọi OPPO A77s, máy sở hữu màn hình lớn, thiết kế đẹp mắt, hiệu năng ổn định cùng hàng loạt thông số nổi bật khác',
        screen : 'IPS LCD6.56"HD+',
        chip : 'Snapdragon 680 4G',
        ram : '8 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/251703/oppo-a95-4g-bac-2-600x600.jpg',
        name : 'Điện thoại OPPO A95',
        price : '6.090.000₫',
        desc : 'Bên cạnh phiên bản 5G, OPPO còn bổ sung phiên bản OPPO A95 4G với giá thành phải chăng tập trung vào thiết kế năng động, sạc nhanh và hiệu năng đa nhiệm ấn tượng sẽ giúp cho cuộc sống của bạn thêm phần hấp dẫn, ngập tràn niềm vui',
        screen : 'AMOLED6.43"Full HD+',
        chip : 'Snapdragon 662',
        ram : '8 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/270360/OPPO-A76-%C4%91en-600x600.jpg',
        name : 'Điện thoại OPPO A76 ',
        price : '5.690.000₫',
        desc : 'OPPO A76 4G ra mắt với thiết kế trẻ trung, hiệu năng ổn định, màn hình 90 Hz mượt mà cùng viên pin trâu cho thời gian sử dụng lâu dài phù hợp cho mọi đối tượng người dùng',
        screen : 'IPS LCD6.56"HD+',
        chip : 'Snapdragon 680',
        ram : '6 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/282090/oppo-a57-xanh-thumb-1-600x600.jpg',
        name : 'Điện thoại OPPO A57 64GB ',
        price : '4.190.000₫',
        desc : 'Điện thoại OPPO A57 64GB vừa mới ra mắt đã tạo ấn tượng tích cực với cộng đồng yêu công nghệ. Sở hữu cho mình một thiết kế trẻ trung, hiệu năng mượt mà đáp ứng tốt nhu cầu cơ bản hằng ngày',
        screen : 'IPS LCD6.56"HD+',
        chip : 'MediaTek Helio G35',
        ram : '4 GB',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/288401/oppo-a17-den-thumb-600x600.jpg',
        name : 'Điện thoại OPPO A17',
        price : '3.990.000₫',
        desc : 'Dường như OPPO đang ngày càng quan tâm đến trải nghiệm của người dùng, điều này được minh chứng qua nhiều dòng điện thoại của hãng trong đó có OPPO A17, máy sở hữu màn hình kích thước lớn, camera 50 MP đi cùng viên pin 5000 mAh với thời lượng dùng bền bỉ',
        screen : 'IPS LCD6.56"HD+',
        chip : 'MediaTek Helio G35',
        ram : '4 GB',
    },
    {
        image : 'https://cdn.tgdd.vn/Products/Images/42/236768/oppo-a54-4g-black-600x600.jpg',
        name : 'Điện thoại OPPO A54',
        price : '3.890.000₫',
        desc : 'OPPO tung ra mẫu điện thoại OPPO A54, được kế thừa thành công của OPPO A53, sở hữu bộ 3 camera AI thông minh, chấm camera selfie tinh tế nằm gọn trong màn hình tràn viền siêu rộng, vận hành mượt mà với hiệu năng ổn định và trở nên khác biệt so với các đối thủ trong tầm giá',
        screen : 'IPS LCD6.5"HD+',
        chip : 'MediaTek Helio P35',
        ram : '4 GB',
    }
    ]

    const samsung = [{
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/10/637957717267975494_samsung-galaxy-z-fold4-xanh-1.jpg',
        name : 'Samsung Galaxy Z Fold 4 5G 512GB',
        price : '42.490.000₫',
        desc : 'Với Samsung Galaxy Z Fold4, smartphone màn hình gập đã trở nên thân thiện, tiện dụng và bền bỉ hơn rất nhiều. Những cải tiến thiết thực trong từng khía cạnh giúp sản phẩm biến hóa linh hoạt hơn và đem lại những trải nghiệm không thể tìm thấy ở đâu khác.',
        screen : 'Dynamic AMOLED 2X, Màn Hình Chính: 7.6 inch, Màn Hình Phụ: 6.2 inch, 120Hz',
        chip : 'Snapdragon 8+ Gen 1',
        ram : '12 GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/11/637643199945549459_samsung-galaxy-z-fold3-bac-1.jpg',
        name : 'Samsung Galaxy Z Fold 3 5G 512GB',
        price : '32.990.000₫',
        desc : 'Khi bạn mở ra màn hình gập lớn tới 7,6 inch trên Samsung Galaxy Z Fold3 5G là lúc bạn đã mở ra một tương lai hoàn toàn mới cho thế giới smartphone, nơi công nghệ vượt qua mọi giới hạn, cho trải nghiệm hoàn hảo nhất ở một thiết bị di động nhỏ gọn.',
        screen : 'Dynamic AMOLED 2X, Màn Hình Chính 7.6 inch, Màn Hình Phụ 6.2 inch, 120 Hz',
        chip : 'Snapdragon 888',
        ram : '12GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/9/637800453115752334_samsung-galaxy-s22-ultra-den-1.jpg',
        name : 'Samsung Galaxy S22 Ultra 5G 512GB',
        price : '30.490.000₫',
        desc : 'Samsung Galaxy S22 Ultra 5G là siêu phẩm kế thừa tinh hoa Galaxy Note cùng đột phá Galaxy S, tạo nên sức mạnh vô song đỉnh cao. Điện thoại đã thiết lập chuẩn mực mới cho dòng smartphone cao cấp từ sức mạnh hàng đầu Snapdragon 8 Gen 1, camera “mắt thần bóng đêm”, khả năng zoom 100x, bút S-Pen tích hợp và thời gian sử dụng cả ngày dài. Đây là siêu phẩm tuyệt vời nhất mà Samsung từng mang đến.',
        screen : 'Dynamic AMOLED 2X, 6.8 inch, 120Hz',
        chip : 'Snapdragon 8 Gen 1',
        ram : '12GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/13/637986875399707328_samsung-galaxy-z-flip4-flex-mode-collection-1.jpg',
        name : 'Samsung Galaxy Z Flip4 5G Flex Mode Collection',
        price : '22.990.000₫',
        desc : 'Linh hoạt biến hóa, không ngừng sáng tạo, Samsung Galaxy Z Flip4 mang đến những xu hướng công nghệ hiện đại, đậm chất thời trang cho người dùng sành điệu. Nay điện thoại còn thêm phần cuốn hút với phiên bản giới hạn Samsung Galaxy Z Flip4 Flex Mode Collection – một sự kết hợp của Samsung và GIA STUDIOS cho phiên bản màu Pink Gold hoặc Blue.',
        screen : 'Dynamic AMOLED, Màn Hình Chính: 6.7 inch, Màn Hình Phụ: 1.9 inch, 120Hz',
        chip : 'Snapdragon 8+ Gen 1',
        ram : '8GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/10/637800486734376188_samsung-galaxy-s22-plus-den-1.jpg',
        name : 'Samsung Galaxy S22 Plus 5G 256GB ',
        price : '22.490.000₫',
        desc : 'Tận hưởng những công nghệ hàng đầu nhà Samsung, Galaxy S22 Plus 5G sẽ cho bạn trải nghiệm đỉnh cao từ thiết kế thời thượng, hiệu năng mạnh mẽ Snapdragon 8 Gen 1 và hệ thống camera đêm chuyên nghiệp nhất từ trước đến nay.',
        screen : 'Dynamic AMOLED 2X, 6.6 inch, 120Hz',
        chip : 'Snapdragon 8 Gen 1',
        ram : '8GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/10/637957685772850661_samsung-galaxy-z-flip4-vang-1.jpg',
        name : 'Samsung Galaxy Z Flip4 5G 256GB',
        price : '22.990.000₫',
        desc : 'Nhỏ gọn và tinh tế, Galaxy Z Flip4 là chiếc smartphone sinh ra dành cho các tín đồ thời trang. Cơ chế gập duyên dáng, bộ màu sắc nhẹ nhàng và loạt chức năng quay chụp sẽ làm say lòng những người yêu cái đẹp.',
        screen : 'Dynamic AMOLED, Màn Hình Chính: 6.7 inch, Màn Hình Phụ: 1.9 inch, 120Hz',
        chip : 'Snapdragon 8+ Gen 1',
        ram : '8GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/11/637643156295663392_samsung-galaxy-z-flip3-5g-black-1.jpg',
        name : 'Samsung Galaxy Z Flip3 5G 256GB ',
        price : '18.490.000₫',
        desc : 'Một biểu tượng thời trang, một kiệt tác của thế giới công nghệ mà ai cũng phải kinh ngạc khi nhìn thấy Samsung Galaxy Z Flip3 5G và cách mà bạn sử dụng siêu phẩm smartphone này, nơi công nghệ điện thoại màn hình gập đã mang đến những điều không tưởng.',
        screen : 'Dynamic AMOLED, Màn Hình Chính: 6.7 inch, Màn Hình Phụ: 1.9 inch, 120Hz',
        chip : 'Snapdragon 888',
        ram : '8GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/2/10/637800498484893706_samsung-galaxy-s22-den-12.jpg',
        name : 'Samsung Galaxy S22 5G 256GB ',
        price : '18.490.000₫',
        desc : 'Samsung Galaxy S22 5G là bước nhảy vọt trong công nghệ video trên thế hệ di động. Đồng thời, điện thoại cũng mở ra loạt cải tiến đột phá hàng đầu hiện nay từ màn hình vát phẳng “nịnh” mắt đến bộ xử lý 4nm tiên tiến đầu tiên trên thế hệ smartphone Samsung.',
        screen : 'Dynamic AMOLED 2X, 6.1 inch, 120Hz',
        chip : 'Snapdragon 8 Gen 1',
        ram : '8GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/7/23/637941779749495327_samsung-galaxy-s22-bora-purple-1.jpg',
        name : 'Samsung Galaxy S22 Bora Purple',
        price : '15.990.000₫',
        desc : 'Bật nét kiêu kỳ, sẵn sàng trendy với phiên bản Samsung Galaxy S22 màu tím (Bora Purple), bạn sẽ trở nên thật thời thượng, ấn tượng và cá tính. Đồng hành đó là những công nghệ tốt nhất của Samsung từ hiệu năng Snapdragon 8 Gen 1, màn hình cao cấp cho đến hệ thống camera chuyên nghiệp.',
        screen : '6.1 inch, Dynamic AMOLED 2X,',
        chip : 'Snapdragon 8 Gen 1',
        ram : '8GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/4/637768938457620224_samsung-galaxy-s21-fe-xam-1.jpg',
        name : 'Samsung Galaxy S21 FE 5G 8GB - 256GB ',
        price : '12.990.00₫',
        desc : 'Tuyệt phẩm dành cho các fan của Galaxy Phone đã xuất hiện, Samsung Galaxy S21 FE 5G dồn nén hàng loạt công nghệ ấn tượng chiều lòng người dùng như màn hình 120Hz siêu mượt, hệ thống camera chụp ảnh chuẩn studio, kết nối 5G tốc độ cao cùng cấu hình đặc biệt ấn tượng. Tất cả gói gọn trong một thân máy nhẹ nhàng với màu sắc đẳng cấp và trẻ trung.',
        screen : 'Dynamic AMOLED 2X, 6.4 inch, 120Hz',
        chip : 'Exynos 2100',
        ram : '8GB',
    } ,
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/7/637849355333862203_samsung-galaxy-a73-xam-1.jpg',
        name : 'Samsung Galaxy A73 5G',
        price : '10.990.000₫',
        desc : 'Trải nghiệm hệ thống camera 108MP đầu tiên trên thế hệ Galaxy A, hiệu năng cực mạnh Snapdragon 778G, màn hình 120Hz mượt mà và kết nối 5G siêu tốc, Samsung Galaxy A73 5G đã sẵn sàng đưa bạn vào thế giới công nghệ đỉnh cao, giúp cuộc sống tiện lợi hơn bao giờ.',
        screen : 'Super AMOLED, 6.7 inch, 120Hz',
        chip : 'Snapdragon 778G',
        ram : '8GB',
    },
    {
        image : 'https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/3/21/637834656039848616_samsung-galaxy-a23-den-1.jpg',
        name : 'Samsung Galaxy A23',
        price : '5.590.000₫',
        desc : 'Cùng tận hưởng những tác vụ giải trí, kết nối và làm việc theo cách ấn tượng nhất trên không gian hình ảnh V-Cut TFT 6.6 inch mà Samsung Galaxy A23 sở hữu. Sản phẩm đem lại nhiều trải nghiệm đơn giản nhưng hiệu quả, ghi nhận năng lực chụp ảnh xuất sắc qua hệ thống bốn camera được tích hợp chống rung quang học OIS.',
        screen : 'TFT LCD, 6.6 inch, 90Hz',
        chip : 'Snapdragon 680',
        ram : '4GB',
    }
    ]

    const accessory = [{
        image : 'https://cdn.tgdd.vn/Products/Images/57/296863/pin-sac-du-phong-10000mah-type-c-pd-qc3-0-hydrus-pb299s-vang-011122-022958-600x600.jpeg',
        name : 'Sạc dự phòng 10000mAh Type C PD QC3.0 Hydrus PB299S Vàng',
        price : '450.000₫',
        desc : 'Pin sạc dự phòng 10000mAh Type C PD QC3.0 Hydrus PB299S Vàng sở hữu thiết kế đơn giản, màu sắc nổi bật, khối lượng gọn nhẹ, sạc pin tiện lợi và nhanh chóng mọi lúc mọi nơi.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/57/266165/pin-sac-10000mah-type-c-pd-qc30-20w-hydrus-pb299s-thumb-1-600x600.jpeg',
        name : 'Pin sạc dự phòng 10000mAh Type C PD QC3.0 Hydrus PB299S',
        price : '600.000₫',
        desc : 'Pin sạc dự phòng 10000mAh Type C PD QC3.0 Hydrus PB299S có kiểu dáng nhỏ gọn, màu sắc nổi bật, in hình hổ đáng yêu.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/58/259283/cap-type-c-lightning-1m-apple-mm0a3-trang-thumb-600x600.jpeg',
        name : 'Cáp Type C - Lightning 1m Apple MM0A3 Trắng',
        price : '530.000₫',
        desc : 'Cáp Type C - Lightning 1m Apple MM0A3 Trắng sở hữu thiết kế đơn giản, độ dài 1 m cùng khả năng sạc nhanh lên đến 87 W chính là sự lựa chọn tuyệt vời cho các iFans chân chính.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/58/232636/cap-type-c-2m-belkin-cab001-ava-1-600x600.jpg',
        name : 'Cáp Type C 2m Belkin CAB001',
        price : '230.000₫',
        desc : 'Sử dụng tiện lợi với thiết kế gọn nhẹ, dây dài 2 m. Chất liệu nhựa phủ bên ngoài dây giúp bảo vệ linh kiện bên trong, độ bền cao, chống rối dây hiệu quả.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/9499/284275/adapter-sac-dual-type-c-35w-apple-mnwp3-trang-thumb-1-600x600.jpeg',
        name : 'Adapter Sạc Dual Type C 35W Apple MNWP3 Trắng',
        price : '1.520.000₫',
        desc : 'Adapter Sạc Dual Type C 35W Apple MNWP3 Trắng sở hữu gam màu trắng tươi sáng, sang trọng, dễ dàng mang theo khi di chuyển.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/9499/245841/type-c-pd-25w-belkin-wca004-ava-600x600.jpg',
        name : 'Adapter Sạc Type C PD 25W Belkin WCA004',
        price : '490.000₫',
        desc : 'Tiết kiệm thời gian với chuẩn sạc nhanh Power Delivery, công suất tối đa 25 W',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/54/287888/tai-nghe-bluetooth-tws-oppo-enco-buds-2-ete41-trang-thumb2-600x600.jpeg',
        name : 'Tai nghe Bluetooth True Wireless OPPO ENCO Buds 2 ETE41',
        price : '1.290.000₫',
        desc : 'Thiết kế dạng tròn mới lạ, màu sắc thời thượng, sang trọng, hứa hẹn khả năng phát ra âm thanh chuẩn sống động và chi tiết tới từng âm bass, âm treble.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/2162/224541/loa-bluetooth-fenda-w5-plus-thumb2-600x600.jpg',
        name : 'Loa Bluetooth Fenda W5 Plus Xám',
        price : '270.000₫',
        desc : 'Thiết kế hiện đại, màu sắc bắt mắt, kết nối ổn định với các thiết bị khác trong phạm vi 10 m với kết nối Bluetooth 4.2.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/2162/295489/loa-bluetooth-fenda-w5-plus-xanh-navy-241022-104112-600x600.jpg',
        name : 'Loa Bluetooth Fenda W5 Plus Xanh Navy',
        price : '360.000₫',
        desc : 'Loa Bluetooth Fenda W5 Plus Xanh Navy đem đến cho bạn một món phụ kiện cực kỳ nhỏ gọn, dễ dàng bỏ vào túi hoặc balo với âm thanh sống động, phù hợp cho nhu cầu giải trí cá nhân của bạn.',
    } ,
    {
        image : 'https://cdn.tgdd.vn/Products/Images/60/291359/op-lung-iphone-14-pro-max-nhua-cung-vien-deo-summer-cosano-thumb1-600x600.jpeg',
        name : 'Ốp lưng iPhone 14 Pro Max Nhựa cứng viền dẻo Summer COSANO',
        price : '150.000₫',
        desc : 'Thiết kế ốp lưng tinh tế, màu sắc thời thượng, nổi bật. Nhựa cứng chất lượng giúp bảo vệ tối đa phần mặt lưng của thiết bị.',
    },
    {
        image : 'https://cdn.tgdd.vn/Products/Images/60/289841/op-lung-galaxy-a04s-nhua-deo-samsung-chinh-hang-den-trong-thumb-600x600.jpg',
        name : 'Ốp lưng Galaxy A04s Nhựa dẻo Samsung',
        price : '200.000₫',
        desc : 'Đường nét thiết kế đơn giản, màu đen trong đẹp mắt. Ốp lưng mỏng nhẹ với các đường bo góc mềm mại cho cảm giác cầm và sử dụng điện thoại thoải mái.',
    }
    ]

    function getProductInLocalStorage () {
        if(JSON.parse(localStorage.getItem('storeList'))) {
            let arr = JSON.parse(localStorage.getItem('storeList'))
            arr.forEach(item => {
                item.image = `./productsImg/${item.image}`

                products.push(item)
                if(item.brand == 'Iphone') {
                    iphone.push(item)
                } else if (item.brand == 'SamSung') {
                    samsung.push(item)
                } else if (item.brand == 'Oppo') {
                    oppo.push(item)
                } else {
                    accessory.push(item)
                }
            })
        }
    }
    getProductInLocalStorage()

    const productContainer = document.querySelector('.content__product')
    const content = document.querySelector('#content')
    const contentSlide = document.querySelector('.content__slide')
    const cart = document.querySelector('#cart')
    const cartList = document.querySelector('.cart__list')

    let quantityProduct = products.length
    let productInOnePage = 8
    let quantityPage = Math.ceil(quantityProduct / productInOnePage)

    // xử lí mobile and ipad
    if(window.matchMedia("(max-width : 1023px)").matches) {
        productInOnePage = 4
        quantityPage = Math.ceil(quantityProduct / productInOnePage)
    }

    function renderProduct(newProducts) {
        productContainer.innerHTML = ''
        for( let i = (page - 1 )*productInOnePage ; i < page*productInOnePage ; i++) {
            if(newProducts[i]) {
                productContainer.innerHTML += `
                <div class="content__product--item">
                        <img src="${newProducts[i].image}" alt="" class="content__product--item-img">
                        <h2 class="content__product--item-name">${newProducts[i].name}</h2>
                        <p class="content__product--item-price">${newProducts[i].price}</p>
                </div>`
                productDetails()
            }
        }
    }
    // PAGINATION AND RENDER PRODUCTS
    const pagination = document.querySelector('.pagination')
    let page = 1
    
    function handlePagination (newProducts) {
        renderProduct(newProducts)
        pagination.innerHTML = ''
        for(let i = 1 ; i <= quantityPage ; i++ ) {
            let pg = document.createElement('div')
            pg.classList.add('page')
            pg.innerText = i
            pagination.appendChild(pg)
        }
        const listPage = [...document.querySelectorAll('.page')]
        if(listPage[0])
            listPage[0].classList.add('active')
    
        listPage.forEach((pag) => {
            pag.addEventListener('click' , (e) => {
                listPage.forEach((prevPage) => {
                    prevPage.classList.remove('active')
                })
                e.target.classList.add('active')
                page = parseInt(e.target.innerText)
                renderProduct(newProducts)
            })
        })
    }
    handlePagination(products)

    // Search products
    const searchIcon = document.querySelector('.header__about-info-search')
    const searchInput = document.querySelector('.header__about-info-search-input')

    searchIcon.addEventListener('click' , (e) => {
        searchInput.classList.toggle('hide')
        searchInput.focus()
    })
    
    searchInput.addEventListener('click' , (e) => {
        e.stopPropagation()
    })

    searchInput.addEventListener('input' , (e) => {
         // show content và ẩn cart đi 
        cart.style.display = 'none'
        content.style.display = 'block'
        contentSlide.style.display = 'flex'

        let valueInput = e.target.value.trim().toLowerCase()
        let countProduct = 0
        productContainer.innerHTML = ''
        const newArrPro = [ ]
        products.forEach((product) => {
            let productName = product.name.trim().toLowerCase()
            
            if(productName.includes(valueInput)) {
                countProduct++
                const newObj = {
                    image : product.image,
                    name : product.name,
                    price : product.price,
                }
                newArrPro.push(newObj)
            }
        })
        // console.log(newArrPro)
        quantityPage = Math.ceil(countProduct / 8)
        const firstPage = document.querySelector('.page:first-child')
        if(firstPage)
            firstPage.click()
        handlePagination(newArrPro)
    })
   
    // Menu header
    function headerMenu () {
        const menuList = [...document.querySelectorAll('.header__menu-item.item-products')]
        menuList.forEach((menuItem) => {
            menuItem.addEventListener('click' , (e) => {
                // show content và ẩn cart đi 
                cart.style.display = 'none'
                content.style.display = 'block'
                contentSlide.style.display = 'flex'

                if(menuItem.matches('#home')) {
                    quantityPage = Math.ceil(products.length / productInOnePage)
                    page = 1
                    handlePagination(products)
                }
                if(menuItem.matches('#iphone')) {
                    quantityPage = Math.ceil(iphone.length / productInOnePage)
                    // chuyển về trang 1
                    const firstPage = document.querySelector('.page:first-child')
                    firstPage.click()
                    handlePagination(iphone)
                } 
                else if(menuItem.matches('#oppo')) {
                    quantityPage = Math.ceil(oppo.length / productInOnePage)
                    const firstPage = document.querySelector('.page:first-child')
                    firstPage.click()
                    handlePagination(oppo)
                }
                else if(menuItem.matches('#samsung')) {
                    quantityPage = Math.ceil(samsung.length / productInOnePage)
                    const firstPage = document.querySelector('.page:first-child')
                    firstPage.click()
                    handlePagination(samsung)
                }
                else if(menuItem.matches('#accessory')) {
                    quantityPage = Math.ceil(accessory.length / productInOnePage)
                    const firstPage = document.querySelector('.page:first-child')
                    firstPage.click()
                    handlePagination(accessory)
                }
            })
        })
        
    }
    headerMenu()

    const addBtn = document.querySelector('.content__product--detail-btn')
    function productDetails() {
        const listProduct = [...document.querySelectorAll('.content__product--item')]
        
        const closeBtn = document.querySelector('.content__product--detail-close')
        
        const detailContainer = document.querySelector('.content__product--detail')
        const detailImg = document.querySelector('.content__product--detail-img img')
        const detailName = document.querySelector('.content__product--detail-info-name')
        const detailPrice = document.querySelector('.content__product--detail-info-price')
        const detailDesc = document.querySelector('.content__product--detail-info-desc')

        const detailQuantity = document.querySelector('.content__product--detail-quantity')
        const detailMinus = document.querySelector('#detail-minus')
        const detailPlus = document.querySelector('#detail-plus')

        // số lượng product
        let count = 1
        detailQuantity.innerHTML = count

        detailContainer.addEventListener('click' , (e) => {
            if(e.target === e.currentTarget) {
                detailContainer.style.display = 'none'
            }
        })
        closeBtn.addEventListener('click' , () => {
            detailContainer.style.display = 'none'
        })
        detailMinus.addEventListener('click' , () => {
            if(parseInt(detailQuantity.innerText) <= 1) {
                return
            }
            count = count - 1
            detailQuantity.innerHTML = count
        })
        detailPlus.addEventListener('click' , () => {
            count = count + 1
            detailQuantity.innerHTML = count
        })

        listProduct.forEach((product) => {
            product.addEventListener('click' , (e) => {
                count = 1
                detailQuantity.innerHTML = count

                // duyệt mảng tìm obj đó rồi innerHTML ra 
                let nameOfPro = product.querySelector('.content__product--item-name').innerText
                products.forEach((pro) => {
                    if(pro.name.includes(nameOfPro)) {
                        detailContainer.style.display = 'flex'
                        detailImg.setAttribute('src' , pro.image)
                        detailName.innerHTML = pro.name
                        detailPrice.innerHTML = pro.price
                        detailDesc.innerHTML = pro.desc
                    }
                })
            })
        })
    }
    
    function handleCart () {
        // để check đăng nhập hay chưa
        const nameUser = document.querySelector('.header__about-info-name p')

        const cartIcon = document.querySelector('.header__about-info-cart')
        cartIcon.addEventListener('click' , (e) => {
            cart.style.display = 'block'
            content.style.display = 'none'
            contentSlide.style.display = 'none'

            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })

        let countCart = 1
        let countItemList = 0

        const buyallBtn = document.querySelector('.buyall-btn')

        addBtn.addEventListener('click' , (e) => {
            buyallBtn.style.display = 'block'
            if(nameUser.innerHTML) {
                let productDetail = e.target.parentElement.parentElement
                let nameDetail = productDetail.querySelector('.content__product--detail-info-name').innerText
                let priceDetail = productDetail.querySelector('.content__product--detail-info-price').innerText
                let quantityDetail = productDetail.querySelector('.content__product--detail-quantity').innerText
                let imageDetail = productDetail.querySelector('.content__product--detail-img img').src
    
                let total
                function handleTotal () {
                    total = (parseInt(priceDetail.split('.').join('').slice(0 , (priceDetail.split('.').join('').length) - 1)) * parseInt(quantityDetail)).toString()
                }
                handleTotal()
    
                let cartItem = document.createElement('div')
                cartItem.classList.add('cart__item')
                cartItem.innerHTML = `<div class="cart__item-img">
                <img src="${imageDetail}" alt="">
                </div>
                <div class="cart__item--about">
                    <div class="cart__item--about-info">
                        <div class="cart__item--about-info-name">${nameDetail}</div>
                        <div class="cart__item--about-info-price">${priceDetail}</div>
                        <div class="cart__item--about-info-quantity-wrap">
                            <span id="cart-minus"><i class="fa-solid fa-minus"></i></span>
                            <span class="cart__item--about-info-quantity">${quantityDetail}</span>
                            <span id="cart-plus"><i class="fa-solid fa-plus"></i></span>
                        </div>
                    </div>
                    <div class="cart__item--about-pay">
                        <div class="cart__item--about-pay-total">${changeNumToPrice(parseInt(total))}</div>
                        <button class="cart__item--about-pay-btn">THANH TOÁN</button>
                    </div>
                </div>
                <div class="cart__close">Xóa</div>
                `
    
                const cartItemArr = [...document.querySelectorAll('.cart__item')]
                
                // kiểm tra nếu có rồi thì tăng số lượng còn chưa có mới thêm
                let booleanCartList = true
                cartItemArr.forEach((cart) => {
                    if(cart.querySelector('.cart__item--about-info-name').innerText === nameDetail) {
                        countCart = cart.querySelector('.cart__item--about-info-quantity').innerHTML
                        booleanCartList = false
                        countCart = parseInt(quantityDetail) +  parseInt(countCart) 
                        cart.querySelector('.cart__item--about-info-quantity').innerHTML = countCart
    
                        // Chỉnh giá total lại nếu đã trùng sản phẩm nhưng vẫn bấm add để thêm vào
                        total = (parseInt(priceDetail.split('.').join('').slice(0 , (priceDetail.split('.').join('').length) - 1)) * countCart).toString()
                        cart.querySelector('.cart__item--about-pay-total').innerHTML = changeNumToPrice(parseInt(total))
                        document.querySelector('.content__product--detail').style.display = 'none'
                    }  
                })
                
                if(booleanCartList){
                    cartList.appendChild(cartItem)
                    countCart = 1
                    document.querySelector('.content__product--detail').style.display = 'none'
                    if(cartList.querySelector('.cart-empty'))
                        cartList.querySelector('.cart-empty').style.display = 'none'
                }
                
                let cartItemList = document.querySelectorAll('.cart__item')
                
                if(cartItemList[countItemList]) {
                    cartItemList[countItemList].querySelector('#cart-plus').addEventListener('click' , (e) => {
                        // chỉnh lại số lượng bằng số lượng hiện tại
                        countCart = parseInt(e.target.parentElement.parentElement.querySelector('.cart__item--about-info-quantity').innerHTML)
                        countCart += 1
                        e.target.parentElement.parentElement.querySelector('.cart__item--about-info-quantity').innerHTML = countCart
                        
                        // Tính tổng lại
                        total = (parseInt(priceDetail.split('.').join('').slice(0 , (priceDetail.split('.').join('').length) - 1)) * countCart).toString()
                        e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.cart__item--about-pay-total').innerHTML = changeNumToPrice(parseInt(total))
                    })
                    cartItemList[countItemList].querySelector('#cart-minus').addEventListener('click' , (e) => {
                        // chỉnh lại số lượng bằng số lượng hiện tại
                        countCart = parseInt(e.target.parentElement.parentElement.querySelector('.cart__item--about-info-quantity').innerHTML)
                        if(countCart <= 1)
                            return
                        countCart--
                        e.target.parentElement.parentElement.querySelector('.cart__item--about-info-quantity').innerHTML = countCart
        
                        // Tính tổng lại
                        total = (parseInt(priceDetail.split('.').join('').slice(0 , (priceDetail.split('.').join('').length) - 1)) * countCart).toString()
                        e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.cart__item--about-pay-total').innerHTML = changeNumToPrice(parseInt(total))
                    })
        
                    // xóa lần 1 được lần 2 không được vì bị mất ele tại vị trí đó nên -- để trở về vị trí đó
                    cartItemList[countItemList].querySelector('.cart__close').addEventListener('click' , (e) => {
                        e.target.parentElement.remove()
                        countItemList--
    
                        if(!document.querySelector('.cart__item')) {
                            cartList.innerHTML = `<h2 class="cart-empty" style="text-align: center; margin-top: 50px;">Giỏ hàng của bạn còn trống</h2>`
                            buyallBtn.style.display = 'none'
                        }
                    })
        
                    countItemList++
                }
            } 
            else {
                alert('Vui lòng đăng nhập để mua sản phẩm!')
                document.querySelector('.content__product--detail').style.display = 'none'
                openForm_Login()
            }
        })

        buyallBtn.addEventListener('click' , (e) => {
            const allItem = [...document.querySelectorAll('.cart__item')]
            let allTotal = 0
            let sum = 0
            // để chứa 1 sản phẩm
            let arrAllItem = []
            // để chứa tất cả đơn hàng mà khách hàng đặt
            let listOrder = []
            if(JSON.parse(localStorage.getItem('order'))) {
                listOrder = JSON.parse(localStorage.getItem('order'))
            }

            function handleTotal (stringTotal ) {
                return newTotal = (parseInt(stringTotal.split('.').join('').slice(0 , (stringTotal.split('.').join('').length) - 1)))
            }

            allItem.forEach((item,index) => {
                let objItem = {}
                let total = handleTotal(item.querySelector('.cart__item--about-pay-total').innerText)

                objItem.name = item.querySelector('.cart__item--about-info-name').innerText
                objItem.total = changeNumToPrice(total)
                objItem.quantity = item.querySelector('.cart__item--about-info-quantity').innerText
                
                sum += parseInt(total)

                objItem.customer = document.querySelector('.header__about-info-name p').innerText
                objItem.sum =  changeNumToPrice(sum)
                objItem.state = 'Chưa hoàn thành'
                arrAllItem.push(objItem)
            })

            allTotal = changeNumToPrice(sum)
            listOrder.push(arrAllItem)
            
            let acceptPay = confirm(`Tổng tiền là : ${allTotal} . Bạn có muốn thanh toán ?`)

            if(acceptPay == true) {
                localStorage.setItem('order' , JSON.stringify(listOrder))

                document.querySelector('.cart__list').innerHTML = ''
                buyallBtn.style.display = 'none'
                alert('Bạn đã đặt hàng thành công !')

                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;

                location.reload()
            }
        })
    }
    handleCart()

    function storeForm() {
        // Thông tin sản phẩm
        const productImage = document.querySelector('.product__img')
        const productName = document.querySelector('.product__name')
        const productPrice = document.querySelector('.product__price')
        const productBranch = document.querySelector('.product__brand')
        const productRemove = document.querySelector('.product__remove')

        // phone
        const phoneName = document.querySelector('.phone__name')
        const phoneBrand = document.querySelector('.phone__brand')
        const phonePrice = document.querySelector('.phone__price')
        const phoneDesc = document.querySelector('.phone__desc')
        const phoneImg = document.querySelector('.phone__img')

        // accessory
        const accessoryName = document.querySelector('.accessory__name')
        const accessoryPrice = document.querySelector('.accessory__price')
        const accessoryDesc = document.querySelector('.accessory__desc')
        const accessoryImg = document.querySelector('.accessory__img')

        const submit = document.querySelector('.content__bottom-right-addproduct-form-btn--style')
        const formPhone = document.querySelector('.form__phone')
        const formAccessory = document.querySelector('.form__accessory')
        const listProduct = document.querySelector('.list__product')

        
        let storeProductList 
        if(localStorage.getItem('storeList')) {
            storeProductList = JSON.parse(localStorage.getItem('storeList'))

            storeProductList.forEach(product => {
                let tr = document.createElement('tr')

                if(product.brand) {
                    tr.innerHTML = `
                    <td class="product__img" > <img src="./productsImg/${product.image}" alt=""> </td>
                    <td class="product__name" > ${product.name} </td>
                    <td class="product__brand" > ${product.brand} </td>
                    <td class="product__price" > ${product.price} </td>
                    <td class="product__remove" > Xóa </td>`
    
                    listProduct.appendChild(tr)
                }
                else {
                    tr.innerHTML = `
                    <td class="product__img" > <img src="./productsImg/${product.image}" alt=""> </td>
                    <td class="product__name" > ${product.name} </td>
                    <td class="product__brand" > Phụ Kiện </td>
                    <td class="product__price" > ${product.price} </td>
                    <td class="product__remove" > Xóa </td>`
    
                    listProduct.appendChild(tr)
                }
            })
        } else {
            storeProductList = []
        }

        phonePrice.addEventListener('change' , (e) => {
            if(isNaN(parseInt(e.target.value))) {
                alert('Giá phải là số')
                e.target.value = ''
            }
        })
        accessoryPrice.addEventListener('change' , (e) => {
            if(isNaN(parseInt(e.target.value))) {
                alert('Giá phải là số')
                e.target.value = ''
            }
        })

        phoneName.addEventListener('change' , (e) => {
            storeProductList.forEach((product,index) => {
                if(product.name == e.target.value) {
                    alert('Sản phẩm này đã tồn tại')
                    formPhone.reset()
                    return
                }
            })
        })
        phoneName.addEventListener('change' , (e) => {
            storeProductList.forEach((product,index) => {
                if(product.name == e.target.value) {
                    alert('Sản phẩm này đã tồn tại')
                    formPhone.reset()
                }
            })
        })
        
        accessoryName.addEventListener('click' , (e) => {
            storeProductList.forEach((product,index) => {
                if(product.name == e.target.value) {
                    alert('Sản phẩm này đã tồn tại')
                    formAccessory.reset()
                }
            })
        })

        formPhone.addEventListener('submit' , (e) => {
            e.preventDefault()

            let imgLinkPhone = URL.createObjectURL(phoneImg.files[0])
            let tr = document.createElement('tr')
            
            tr.innerHTML = `
            <td class="product__img" > <img src=${imgLinkPhone} alt=""> </td>
            <td class="product__name" > ${phoneName.value} </td>
            <td class="product__brand" > ${phoneBrand.value} </td>
            <td class="product__price" > ${changeNumToPrice(parseInt(phonePrice.value))} </td>
            <td class="product__remove" > Xóa </td>`

            listProduct.appendChild(tr)
            
            storeProductList.push({
                image : phoneImg.files[0].name ,
                name : phoneName.value,
                price : changeNumToPrice(parseInt(phonePrice.value)),
                desc : phoneDesc.value ,
                brand : phoneBrand.value
            })
            localStorage.setItem('storeList' , JSON.stringify(storeProductList))

            formPhone.reset()
            localStorage.setItem('inStore' , true)
            location.reload()
        })

        formAccessory.addEventListener('submit' , (e) => {
            e.preventDefault()

            let imgLinkAccessory = URL.createObjectURL(accessoryImg.files[0])
            let tr = document.createElement('tr')
            
            tr.innerHTML = `
            <td class="product__img" > <img src=${imgLinkAccessory} alt=""> </td>
            <td class="product__name" > ${accessoryName.value} </td>
            <td class="product__brand" > Phụ Kiện </td>
            <td class="product__price" > ${changeNumToPrice(parseInt(accessoryPrice.value))} </td>
            <td class="product__remove" > Xóa </td>`

            listProduct.appendChild(tr)

            storeProductList.push({
                image : accessoryImg.files[0].name ,
                name : accessoryName.value,
                price : changeNumToPrice(parseInt(accessoryPrice.value)),
                desc : accessoryDesc.value ,
            })
            localStorage.setItem('storeList' , JSON.stringify(storeProductList))

            formAccessory.reset()
            localStorage.setItem('inStore' , true)
            location.reload()
        })
    }
    storeForm()

    function removeStoreProduct () {
        const removeStoreProducts = document.querySelectorAll('.product__remove')
        let newStoreProductList = JSON.parse(localStorage.getItem('storeList'))

        removeStoreProducts.forEach(storePro => {
            storePro.addEventListener('click' , (e) => {
                let accept = confirm('Bạn có muốn xóa không ?')
                let name = e.target.parentElement.querySelector('.product__name').innerText

                if(accept == true) {
                    newStoreProductList.forEach((product,index) => {
                        if(product.name == name) {
                            newStoreProductList.splice(index , 1)
                            e.target.parentElement.remove()
                        }
                    })
                    localStorage.setItem('storeList' , JSON.stringify(newStoreProductList))
                }
            })
        })
    }
    removeStoreProduct()
}
productItem()

;(function contentBlog () {
    const btnLeft = document.querySelector('#content__blog-btn-left')
    const btnRight = document.querySelector('#content__blog-btn-right')
    const itemBlog = document.querySelector('.content__blog--item')
    const blogContainer = document.querySelector('.content__blog-wrap')

    btnLeft.addEventListener('click' , () => {
        blogContainer.scrollLeft -= itemBlog.offsetWidth + 12
    })
    btnRight.addEventListener('click' , () => {
        blogContainer.scrollLeft += itemBlog.offsetWidth + 12
    })
})()

function openForm_Login()
{
    document.getElementById("modal").style.display = "block";
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";

    document.getElementById("modal__body").style.height = "350px";
}

function openForm_Register()
{
    document.getElementById("modal").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";

    document.getElementById("modal__body").style.height = "500px";
}

function close_Form()
{
    document.getElementById("modal").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "none";
}

function showError(input, message) {
    input.parentElement.classList.add('error')
    input.parentElement.querySelector('small').innerText = message;
}

function showSuccess(input) {
    input.parentElement.classList.remove('error')
    input.parentElement.querySelector('small').innerText = '';
}

function checkEmailError (input) {
    const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    input.value = input.value.trim()
    let isEmailError = !regex.test(input.value)
    if(regex.test(input.value)) {
        showSuccess(input)
    }else {
        showError(input, 'Email Invalid')
    }
    return isEmailError;
}

function checkLengthError (input , min , max ) {
    input.value = input.value.trim()
    
    if(input.value.length < min) {
        showError(input , `Truong nay phai dai hon ${min} ky tu`)
        return true
    }
    if (input.value.length > max) {
        showError(input , `Truong nay phai ngan hon ${max} ky tu`)
        return true
    } 
    else{
        showSuccess(input)
    }
    return false
}

function checkConfirmPassword(password , confirmPassword) {
    let isConfirmPasswordError = false
    if(password.value != confirmPassword.value) {
        showError(confirmPassword , 'Mat khau xac nhan khong dung')
        isConfirmPasswordError=true
    } else {
        showSuccess(confirmPassword)
    }

    return isConfirmPasswordError
}

function handleForm () {
    let Account
    
    if(JSON.parse(localStorage.getItem('SignUp'))) {
        Account = JSON.parse(localStorage.getItem('SignUp'))
    } else {
        Account = []
    }
        
    // reset localStorage
    // Account = []
    // localStorage.setItem('SignUp' , JSON.stringify(Account))

    // lấy dữ liệu từ localStorage
    let accountSignIn = JSON.parse(localStorage.getItem('SignUp'))

    ;(function handleSignup () {
        const nameSignUp = document.querySelector('#auth-form_input-name')
        const emailSignUp = document.querySelector('#auth-form_input-email')
        const phoneSignUp = document.querySelector('#auth-form_input-phone')
        const addressSignUp = document.querySelector('#auth-form_input-address')
        const passwordSignUp = document.querySelector('#auth-form_input-password')
        const passwordConfirmSignUp = document.querySelector('#auth-form_input-password-confirm')
        const signUpForm = document.querySelector('#dangky')
    
        signUpForm.addEventListener('submit' , (e) => {
            e.preventDefault()
            let isEmailError = checkEmailError(emailSignUp)
            let isPasswordLength = checkLengthError(passwordSignUp , 5 , 20)
            let isPasswordConfirmLength = checkConfirmPassword(passwordSignUp ,passwordConfirmSignUp)
    
            let accountSignIn = JSON.parse(localStorage.getItem('SignUp'))
            let checkEmailValid = false
            if(accountSignIn) {
                accountSignIn.forEach(account => {
                    if(account.email == emailSignUp.value) {
                        alert('Email này đã được sử dụng!')
                        emailSignUp.value = ''
                        checkEmailValid = true
                    }
                })
            }

            let checkPhoneNumber = false 
            if(isNaN(parseInt(phoneSignUp.value))) {
                alert('Số điện thoại phải là số!')
                checkPhoneNumber = true
            }
    
            if(!isEmailError && !isPasswordLength && !isPasswordConfirmLength && !checkEmailValid && !checkPhoneNumber) {
                let signUpAccount = {}
                signUpAccount.name = nameSignUp.value
                signUpAccount.email = emailSignUp.value
                signUpAccount.phone = phoneSignUp.value
                signUpAccount.address = addressSignUp.value
                signUpAccount.password = passwordSignUp.value
    
                Account.push(signUpAccount)
                localStorage.setItem('SignUp' , JSON.stringify(Account))
    
                alert('Bạn đã đăng ký thành công !')
                // set load để hiện form login
                localStorage.setItem('load' , true)
                location.reload()
    
                nameSignUp.value = ''
                emailSignUp.value = ''
                phoneSignUp.value = ''
                passwordSignUp.value = ''
                passwordConfirmSignUp.value =''
            }
        })
    })()

    function handleSignin() {
        const emailSignIn = document.querySelector('#auth-form_input-email-signin')
        const passwordSignIn = document.querySelector('#auth-form_input-password-signin')
        const signInForm = document.querySelector('#dangnhap')
    
        const nameUser = document.querySelector('.header__about-info-name p')
        const signUpBtn = document.querySelector('.header__about-info-signup')
        const signInBtn = document.querySelector('.header__about-info-signin')
        const logout = document.querySelector('.header__about-info-logout')
    
        // Xử lí nếu đăng nhập là người bán hàng
        // const salesInput = document.querySelector('.auth-form__sales-input')
        const salesOptions = document.querySelector('.header__about-info-setting')

        // ô check người bán hàng
        // let checked
        // salesInput.addEventListener('input' , (e) => {
        //     checked = e.target.checked
        // })

        accountSignIn = JSON.parse(localStorage.getItem('SignUp'))
        
        signInForm.addEventListener('submit' , (e) => {
            let check 
            e.preventDefault()
            
            accountSignIn.forEach(account => {
                if(account.email == emailSignIn.value && account.password == passwordSignIn.value) {
                    alert('Đăng nhập thành công')
                    close_Form()
                    
                    // check người bán hàng thì hiện tùy chọn
                    if(account.email == 'phamtandat655@gmail.com') {
                        salesOptions.style.display = 'block'
                        // checked = false
                        // signInForm.reset()
                    }
                    else {
                        salesOptions.style.display = 'none'
                    }
    
                    nameUser.innerText = account.name
                    signUpBtn.style.display = 'none'
                    signInBtn.style.display = 'none'
                    logout.style.display = 'block'
    
                    emailSignIn.value = ''
                    passwordSignIn.value = ''

                    let objSignin = {
                        name : account.name ,
                        email : account.email
                    }
                    localStorage.setItem('signin' , JSON.stringify(objSignin))
                    
                    check = true
                    // return
                    location.reload()
                }        
            })
    
            if (check !== true) {
                alert('Tài khoản hoặc mật khẩu không chính xác')
                return
            }
        })
    
        if(nameUser.innerText) {
            signUpBtn.style.display = 'none'
            signInBtn.style.display = 'none'
            logout.style.display = 'block'
        }
    
        logout.addEventListener('click' , (e) => {
            localStorage.removeItem('signin')

            nameUser.innerText = ''
            signUpBtn.style.display = 'block'
            signInBtn.style.display = 'block'
            logout.style.display = 'none'
            salesOptions.style.display = 'none'
        })
    }
    handleSignin()
}
handleForm()

window.addEventListener('load' , (e) => {
    document.querySelector('.store').style.display = 'none'

    if(JSON.parse(localStorage.getItem('load')) == true){
        openForm_Login()
        localStorage.removeItem('load')
    }
    if(JSON.parse(localStorage.getItem('signin'))) {
        document.querySelector('.header__about-info-name p').innerText = JSON.parse(localStorage.getItem('signin')).name
        document.querySelector('.header__about-info-signup').style.display = 'none'
        document.querySelector('.header__about-info-signin').style.display = 'none'
        document.querySelector('.header__about-info-logout').style.display = 'block'
        if(JSON.parse(localStorage.getItem('signin')).email == 'phamtandat655@gmail.com') {
            document.querySelector('.header__about-info-setting').style.display = 'block'
        }
    }
    if(JSON.parse(localStorage.getItem('inStore'))) {
        document.querySelector('.store').style.display = 'block'
        document.querySelector('#header').style.display = 'none'
        document.querySelector('.content__slide').style.display = 'none'
        document.querySelector('#content').style.display = 'none'
        document.querySelector('#footer').style.display = 'none'
        document.querySelector('#cart').style.display = 'none'
        document.querySelector('.modal-wrap').style.display = 'none'
        localStorage.removeItem('inStore')

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
})

function NoForm()
{
    var value1 = document.getElementById('loaisanpham');
    var status = value1.value;

    // console.log(status);

    if(status === 'none')
    {
        document.getElementById('content__bottom-right-addproduct--form1').style.display = 'none';
        document.getElementById('content__bottom-right-addproduct--form2').style.display = 'none';
    }

    if(status === 'Điện thoại')
    {
        document.getElementById('content__bottom-right-addproduct--form1').style.display = 'block';
        document.getElementById('content__bottom-right-addproduct--form2').style.display = 'none';
    }

    if(status === 'Phụ kiện')
    {
        document.getElementById('content__bottom-right-addproduct--form1').style.display = 'none';
        document.getElementById('content__bottom-right-addproduct--form2').style.display = 'block';
    }
}
function open_Product()
{
    document.getElementById('content--style-product').style.display = 'block';
    document.getElementById('content--style-order').style.display = 'none';
    document.getElementById('content--style-customer').style.display = 'none';
}
function open_Order()
{
    document.getElementById('content--style-product').style.display = 'none';
    document.getElementById('content--style-order').style.display = 'block';
    document.getElementById('content--style-customer').style.display = 'none';
}
function open_Customer()
{
    document.getElementById('content--style-product').style.display = 'none';
    document.getElementById('content--style-order').style.display = 'none';
    document.getElementById('content--style-customer').style.display = 'block';
}

function handleFormStore () {
    const nameSignin = document.querySelector('.content__top-accountname')
    
    if(JSON.parse(localStorage.getItem('signin'))) {
        nameSignin.innerHTML = JSON.parse(localStorage.getItem('signin')).name
    }
    
    const settingUser = document.querySelector('.header__about-info-setting a')
    const storeHome = document.querySelector('.sidebar__home')
    const store = document.querySelector('.store')

    settingUser.addEventListener('click' , (e) => {
        store.style.display = 'block'
        open_Product()
        document.querySelector('#header').style.display = 'none'
        document.querySelector('.content__slide').style.display = 'none'
        document.querySelector('#content').style.display = 'none'
        document.querySelector('#footer').style.display = 'none'
        document.querySelector('#cart').style.display = 'none'
        document.querySelector('.modal-wrap').style.display = 'none'
    })

    storeHome.addEventListener('click' , (e) => {
        location.reload()
        store.style.display = 'none'
        document.querySelector('#header').style.display = 'block'
        document.querySelector('.content__slide').style.display = 'flex'
        document.querySelector('#content').style.display = 'block'
        document.querySelector('#footer').style.display = 'block'
    })

    const customerNumber = document.querySelectorAll('.customer__number')
    const customerName = document.querySelector('.customer__name')
    const customerMail = document.querySelector('.customer__mail')
    const customerPhone = document.querySelector('.customer__phone')

    const customerList = document.querySelector('.customer__list')

    let arrCustomer = JSON.parse(localStorage.getItem('SignUp'))
    if(arrCustomer) {
        arrCustomer.forEach((customer,index) => {
            if(customer.email != 'phamtandat655@gmail.com') {
                let tr = document.createElement('tr')
                tr.innerHTML = `<td class="customer__number"> ${index} </td>
                <td class="customer__name"> ${customer.name} </td>
                <td class="customer__mail"> ${customer.email} </td>
                <td class="customer__phone"> ${customer.phone} </td>
                <td > <div class="customer__delete btn-delete">Xóa</div> </td>`
        
                customerList.appendChild(tr)
            }
        })
    }

    function removeCustomer () {
        const customerDeleteBtns = document.querySelectorAll('.customer__delete')
        let arrCus = [...JSON.parse(localStorage.getItem('SignUp'))]

        customerDeleteBtns.forEach(customerBtn => {
            customerBtn.addEventListener('click' , (e) => {
                let accept = confirm('Bạn có muốn xóa khách hàng này không ?')
                let email = e.target.parentElement.parentElement.querySelector('.customer__mail').innerText

                if(accept == true) {
                    arrCus.forEach((cus,index) => {
                        if(cus.email == email) {
                            // index + 1 vì bỏ thằng đầu tiên là thằng admin
                            arrCus.splice(index , 1)
                            e.target.parentElement.parentElement.remove()
                        }
                    })
                }
                localStorage.setItem('SignUp' , JSON.stringify(arrCus))
            })
        })
    }
    removeCustomer()
}
handleFormStore()

function changeNumToPrice (number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ'
}

function responsiveMobile () {
    const bars = document.querySelector('.header__menu-phone')
    const headerMenu = document.querySelector('.header__menu-list')
    const itemsMenu = [...document.querySelectorAll('.header__menu-item')]

    bars.addEventListener('click' , (e) => {
        headerMenu.classList.toggle('hide-menu')
    })
    itemsMenu.forEach(item => {
        item.addEventListener('click' , (e) => {
            headerMenu.classList.toggle('hide-menu')
        })
    })

    const logo = document.querySelector('.header__logo')
    logo.addEventListener('click' , (e) => {
        location.reload()
    })
    
    const storeMenu = document.querySelector('.store__menu')
    const storeBars = document.querySelector('.sidebar__wrap')
    storeMenu.addEventListener('click' , (e) => {
        storeBars.classList.toggle('hide-sidebar')
    })
    storeBars.addEventListener('click' , (e) => {
        if(e.target == e.currentTarget) {
            storeBars.classList.toggle('hide-sidebar')
        }
    })
    const storeProduct = document.querySelector('.sidebar__product')
    storeProduct.addEventListener('click' , (e) => {
        storeBars.classList.toggle('hide-sidebar')
    })
}
responsiveMobile()

window.addEventListener('resize' , (e) => reloadResponsiveProduct())
function reloadResponsiveProduct() {
    // để tạo lại số trang và sản phẩm trên mobile và ipad
    if(JSON.parse(localStorage.getItem('reloadResponsive')) == true) {
        if(window.innerWidth > 1024) {
            localStorage.setItem('reloadResponsive' , false)
            location.reload()
        }
    } else if(JSON.parse(localStorage.getItem('reloadResponsive')) == false) {
        if(window.innerWidth < 1024) {
            localStorage.setItem('reloadResponsive' , true)
            location.reload()
        }  
    }
}
reloadResponsiveProduct()

function handleOrder () {
    let listOrder = JSON.parse(localStorage.getItem('order'))
    const orderTBody = document.querySelector('.order__tbody')
    
    if(listOrder) {
        listOrder.forEach((orderArr,index) => {
            let tr = document.createElement('tr')
            tr.innerHTML = `<td class="order__number"> ${index + 1} </td>
            <td class="order__name"> ${orderArr[orderArr.length - 1].customer} </td>
            <td class="order__total"> ${orderArr[orderArr.length - 1].sum} </td>
            <td style="height: 60px; min-width: 200px; padding-left: 10px;" class="order__state">
                ${orderArr[orderArr.length - 1].state}
            </td>`
            
            orderTBody.appendChild(tr)
        })
    }

    [...document.querySelectorAll('.order__state')].forEach((state , index) => {
        state.addEventListener('click' , (e) => {
            state.innerText = 'Hoàn thành'

            listOrder.forEach((orderArr,index) => {
                if(orderArr[0].customer == e.target.parentElement.querySelector('.order__name').innerText) {
                    orderArr[orderArr.length - 1].state = 'Hoàn thành'
                    localStorage.setItem('order' , JSON.stringify(listOrder))
                }
            })
        })
    })
    
    let orderItems = [...document.querySelectorAll('.order__tbody tr .order__name')]
    const detailOrder = document.querySelector('.order__detail')
    const detailWrap = document.querySelector('.order__info-wrap')

    orderItems.forEach(item => {
        item.addEventListener('click' , (e) => {
            detailOrder.style.display = 'flex'
            
            let nameCustomer
            let phoneCustomer
            let addressCustomer
            let allTotal
            let allPro = ''

            listOrder.forEach((arrOrder,index) => {
                if(arrOrder[0].customer == e.target.parentElement.querySelector('.order__name').innerText && arrOrder[arrOrder.length - 1].sum == e.target.parentElement.querySelector('.order__total').innerText) {
                    nameCustomer = arrOrder[0].customer
                    allTotal = arrOrder[arrOrder.length - 1].sum

                    arrOrder.forEach(itemOrder => {
                        allPro += `<li class="order__info--product-item">
                            <p class="order__info--product-item-name">${itemOrder.name}</p>
                            x<p class="order__info--product-item-quantity">${itemOrder.quantity}</p>
                        </li>`
                    })
                }
            })
            
            let userLocalStorage = JSON.parse(localStorage.getItem('SignUp'))
            userLocalStorage.forEach(user => {
                if(user.name == nameCustomer ) {
                    phoneCustomer = user.phone
                    addressCustomer = user.address
                }
            })

            let detail = `  <div class="order__info-close"><i class="fa-solid fa-x"></i></div>
                            <h3 class="order__info-header">THÔNG TIN ĐƠN HÀNG</h3>
                            <div class="order__info--product">
                                <div><h4>SẢN PHẨM ĐÃ ĐẶT</h4></div>
                                <ul class="order__info--product-list">
                                    ${allPro}
                                </ul>
                            </div>
                            <div class="order__info--customer">
                                <h4>THÔNG TIN KHÁCH HÀNG</h4>
                                <div class="order__info--customer-name-wrap">
                                    Tên : 
                                    <p class="order__info--customer-name">${nameCustomer}</p>
                                </div>
                                <div class="order__info--customer-phone-wrap">
                                    Số điện thoại : 
                                    <p class="order__info--customer-phone">${phoneCustomer}</p>
                                </div>
                                <div class="order__info--customer-address-wrap">
                                    Địa chỉ : 
                                    <p class="order__info--customer-address">${addressCustomer}</p>
                                </div>
                            </div>
                            <div class="order__info--total-wrap">
                                Tổng giá trị : <p class="order__info--total">${allTotal}</p>
                            </div>
                            <div class="order__info--print">
                                <button class="order__info--print-btn" onclick="window.print()">Xuất đơn hàng</button>
                            </div>`

            detailWrap.innerHTML = detail

            document.querySelector('.order__info-close').addEventListener('click' , (e) => {
                detailOrder.style.display = 'none'
            })
            document.querySelector('.order__detail').addEventListener('click' , (e) => {
                if(e.target == e.currentTarget)
                    detailOrder.style.display = 'none'
            })
        })
    })
}
handleOrder()
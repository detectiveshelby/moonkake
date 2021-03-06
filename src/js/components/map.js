window.initMap = () => {
	ymaps.ready(() => {
		const map = new ymaps.Map('map', {
			center: [51.507351, -0.12766],
			zoom: 17,
			controls: []
		})

		map.behaviors.disable('scrollZoom')

		map.controls.add(
			new ymaps.control.ZoomControl({
				options: {
					position: {
						right: 10,
						bottom: 30
					}
				}
			})
		)

		const pacemark = new ymaps.Placemark(
			map.getCenter(),
			{
				balloonContent: 'Адрес',
				iconCaption: 'Заголовок'
			},
			{
				preset: 'islands#redIcon',
				iconCaptionMaxWidth: '200'
				// iconLayout: 'default#image',
				// iconImageHref: 'assets/img/marker.png',
				// iconImageSize: [54, 70],
				// iconImageOffset: [-27, -70]
			}
		)

		map.geoObjects.add(pacemark)
	})
}

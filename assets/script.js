document.addEventListener('DOMContentLoaded', function() {
	const table = document.getElementById('table2');
	const tbody = table.querySelector('tbody');
	const rows = tbody.querySelectorAll('tr');

	const countries = [];
	const data2007_09 = [];
	const data2010_12 = [];

	rows.forEach(row => {
		const cells = row.querySelectorAll('td');
		countries.push(cells[0].innerText.trim());
		data2007_09.push(parseInt(cells[1].innerText.trim(), 10));
		data2010_12.push(parseInt(cells[2].innerText.trim(), 10));
	});

	const ctx = document.getElementById('chart').getContext('2d');
	const chart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: countries,
			datasets: [
				{
					label: '2007-09',
					data: data2007_09,
					backgroundColor: 'rgba(75, 192, 192, 0.6)',
					borderColor: 'rgba(75, 192, 192, 1)',
					borderWidth: 1
				},
				{
					label: '2010-12',
					data: data2010_12,
					backgroundColor: 'rgba(153, 102, 255, 0.6)',
					borderColor: 'rgba(153, 102, 255, 1)',
					borderWidth: 1
				}
			]
		},
		options: {
			responsive: true,
			scales: {
				x: {
					beginAtZero: true
				},
				y: {
					beginAtZero: true
				}
			}
		}
	});
});

document.addEventListener('DOMContentLoaded', function() {
	const table = document.getElementById('table1');
	const labels = Array.from(table.rows[1].cells).slice(2).map(cell => cell.textContent);
	const datasets = Array.from(table.rows).slice(2).map(row => {
		const country = row.cells[1].textContent;
		const data = Array.from(row.cells).slice(2).map(cell => parseFloat(cell.textContent.replace(/,/g, '')) || null);
		return { label: country, data: data };
	});

	const ctx = document.getElementById('myChart').getContext('2d');
	new Chart(ctx, {
		type: 'line',
		data: {
			labels: labels,
			datasets: datasets.map(dataset => ({
				label: dataset.label,
				data: dataset.data,
				fill: false,
				borderColor: getRandomColor(),
				tension: 0.1
			}))
		},
		options: {
			responsive: true,
			scales: {
				x: {
					title: {
						display: true,
						text: 'Year'
					}
				},
				y: {
					title: {
						display: true,
						text: 'Number of Offences (in thousands)'
					}
				}
			}
		}
	});

	function getRandomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
});
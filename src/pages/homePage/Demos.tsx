import { Link } from 'react-router-dom'
import { Demo } from './types'

interface DemosProps {
	landings: Demo[]
}
const Demos = ({ landings }: DemosProps) => {
	return (
		<section className="py-20" id="demo">
			<div className="container">
				<div className="text-center">
					<span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
						Demos
					</span>
					<h1 className="text-4xl my-4">Landing Pages</h1>
					<p className="text-slate-500 mb-14">
						Modern landing pages available for every need
					</p>
				</div>
				<div
					className="grid md:grid-cols-2 grid-cols-1 gap-6"
					data-aos="fade-up"
					data-duration="600"
				>
					{(landings || []).map((item, idx) => {
						return (
							<Link to={item.url} target="_blank" key={idx}>
								<div className="border p-2 rounded">
									<img src={item.image} />
								</div>
								<h4 className="text-base text-center mt-4">{item.name}</h4>
							</Link>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Demos

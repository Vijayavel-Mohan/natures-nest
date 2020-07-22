import React from 'react';
import './Featurete.css';

const Featurette = (props) => {
	let imgSrc = process.env.PUBLIC_URL + '/assets/images/' + props.img;
	let imagePosition = props.imagePosition === 'right' ? 'featurette-image img-right' : 'featurette-image img-left';
	return (
		<div className='featurette'>
			<img className={imagePosition} src={imgSrc} />
			{props.heading ?
				<h2 className='featurette-heading'>
					{props.heading}
				</h2> : null}
			{props.content ? <p className='lead'>
				{props.content}
			</p> : null}
		</div>
	);
};
export default Featurette;
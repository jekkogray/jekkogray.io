import React, { Component } from 'react'


function SideBar(){
    return(
	<aside>
		<nav>
			<ul>
				<li><a href="index.html" width="300px" height="300px">home<i class="fa fa-circle-o"></i></a></li>
				<li><a href="aboutme.html">about me<i class="fa fa-user"></i></a></li>
				<li>archive<i class="fa fa-folder"></i>
				</li>
				<li>projects<i class="fa fa-square"></i></li>
				<li>gallery<i class="fa fa-square"></i></li>
				<li>contact me<i class="fa fa-circle"></i></li>
			</ul>
		</nav>
	</aside>
    );
}

export default SideBar;
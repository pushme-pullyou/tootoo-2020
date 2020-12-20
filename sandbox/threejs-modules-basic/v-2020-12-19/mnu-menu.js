
const MNU = {}

MNU.init = function () {


	if ( window.innerWidth < 640 || window.innerHeight < 500 ) {

	} else {

		detNavMenu.open = true;

	}

}

MNU.navMenu = `

	<details id=detNavMenu class="gmd-4">

		<summary id=sumNavMenu class="summary-secondary gmd-1">show || hide menu</summary>

		<nav id="navMenu" class="gmd-2">

			<header>

				<h2>
					<a id=aGithub target="_top" title="Source code on GitHub">
						<img src="../../../lib/assets/icons/mark-github.svg">
					</a>

					<a href="" title="Click to reload this page">
						Basic Viewer
						<span id=spnVersion></span>
					</a>
					&nbsp;
					<span class="info">
						<img class=infoImg src="../../../lib/assets/icons/noun_Information_585560.svg">
						<span id="divDescription" class="infoTooltip gmd-5">
						</span>
					</span>

				</h2>

			</header>

			<p>Click or touch a surface to view its details. Click &sdotb; icon to display all the surfaces.</p>

			<!-- <details id=detFile>

				<summary class="summary-primary gmd-1" title="Open files on your device: ">file menu</summary>

				<div id=FRdivMenuFileReader></div>

				<p>
					<input type=file id=FRinpFile onchange=FR.readFile(this); accept="*">
				</p>

				<div id=FOOdivLog>to be reset</div>

				<div id=FOZdivFileOpenZip></div>

				<div id=divLog></div>

			</details> -->

			<div id=divGFF ></div>

			<details ontoggle=GFFdivGithubFoldersFiles.innerHTML=GFF.getMenuGithubFoldersFiles() class=divNavResize>

				<summary class="summary-primary gmd-1" title="View selected items">sample files gallery</summary>

				<div>

					<p>Sample files you can load, view and experiment with:</p>

					<div id=GFFdivGithubFoldersFiles></div>

					<div id=GFFdivFileInfo></div>

					<br>

				</div>

			</details>

			<!--
			<details ontoggle=GGFFdivGithubFoldersFiles.innerHTML=GGFF.getMenuGithubFoldersFiles()>

				<summary class="summary-primary gmd-1" title="View selected items">gltf sample files gallery</summary>

				<div class=divNavResize>

					<p>Sample files you can load, view and experiment with:</p>

					<div id=GGFFdivGithubFoldersFiles></div>

					<div id=GGFFdivFileInfo></div>

					<br>

				</div>

			</details> -->

			<!-- <details class=detNavMenu id=detView ontoggle=JTV.setMessage();>

				<summary class="summary-primary gmd-1" title="View selected model aspects" >view menu</summary>

					<div class=divNavResize >

					<div id=VTdivViewTypes ></div>

					<div id=VTdivAttributes></div>

				</div>

			</details>

			<details class=detNavMenu id=detData ontoggle=JTV.setMessage();>

				<summary class="summary-primary gmd-1" title="Browse the data in the file">data menu</summary>

				<div class=divNavResize>

					<div id=JTHdivJsonTreeHelper></div>

					<div id=JTFdivJsonTreeFinder></div>

					<div id=JTEdivJsonTreeEdit></div>

					<div id=JTVdivJsonTreeView></div>

					<hr>

				</div>

			</details>

		-->

			<br>


			<center>
				<a id=aMenuFooter href="javascript:navMenu.scrollTo(0,0);"></a>
			</center>

		</nav>

	</details>`;


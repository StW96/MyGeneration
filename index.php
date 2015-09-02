<?php include 'include/header.php'; ?>
        <main>
            <div class="tilemap">
                <div class="imgBox" id="imgBox">
                    <div id="primary" class="carousel">
                        <ul>
                            <li>
                                <a href="klasse.php">
                                    <img src="http://dummyimage.com/800x600/000/ffffff.png&text=IBA3H14B">
                                </a>
                            </li>
                            <li>
                                <a href="klasse.php">
                                    <img src="http://dummyimage.com/800x600/000/ffffff.png&text=IBM3H14B">
                                </a>
                            </li>
                        </ul>
                        <form>
                            <input type="button" name="back" value="&#x3008;" onclick="toggleSlide('back');">
                            <input type="button" name="forth" value="&#x3009;" onclick="toggleSlide('forth');">
                        </form>
                    </div>
                </div>
            </div>
        </main>
<?php include 'include/footer.php'; ?>
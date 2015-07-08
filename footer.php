<footer class="footer">
    <div class="container legal">
        <div class="row">
            <div class="col-sm-12">
                <div class="copyrights">
                    <?php $copyright = carya_option("footer_copyright");
                    if(!empty($copyright)){
                        echo esc_attr( $copyright );
                    } ?>
                </div>
            </div>
        </div>
    </div>
    <div class="container fixed-footer show-footer">
		<div class="row">
            <div class="col-md-12">
                <?php if ( ! dynamic_sidebar( 'footer1' ) ) : ?>
                <?php endif; ?>
            </div>
		</div>
	</div>
</footer>
<?php $custom_js = carya_option("custom_js");
if(!empty($custom_js)){ ?>
    <script type="text/javascript">
        <?php echo esc_js($custom_js); ?>
    </script>
<?php } ?>
<?php wp_footer(); ?>
</body>
</html>
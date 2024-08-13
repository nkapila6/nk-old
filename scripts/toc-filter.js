hexo.extend.filter.register('before_post_render', function(data){
  data.content = data.content.replace(/\[toc\]/g, '@[toc]');
  return data;
});

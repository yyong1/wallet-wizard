<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/CategoriesDao.class.php';

class CategoriesServices extends BaseService
{
    public function __construct()
    {
        parent::__construct(new CategoriesDao);
    }

    public function get_categories_with_user_by_id($id)
    {
        $categories = $this->dao->get_categories_with_user_by_id($id);

        $result = array();

        foreach ($categories as $item) {
            $categoryName = $item['CategoryName'];
            $subCategoryName = $item['SubCategoryName'];
            
            if (!isset($result[$categoryName])) {
                $result[$categoryName] = array();
            }
            
            $result[$categoryName][] = $subCategoryName;
        }
        
        return $result;
    }
    public function add($entity)
    {   
        return $this->dao->add($entity);
    }

}
?>